import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { mockUsers, mockProjects, mockStories } from 'src/assets/data/mock-data';
import { User } from '../model/user.model';


const users: User[] | any = mockUsers;

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body, params } = request;

        // wrap in delayed observable to simulate server api call
        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());

        function handleRoute() {
            switch (true) {
                case url.endsWith('/users/login') && method === 'POST':
                    return authenticate();
                case url.endsWith('/users') && method === 'GET':
                    return getUsers();
                case url.endsWith(`/getUserProjectSummary`) && method === 'GET':
                    const userId = params.get('userId');
                    return getUserprojects(Number(userId));
                case url.endsWith(`/getUserProjectDetails`) && method === 'GET':
                    const projectId = params.get('projectId');
                    return getUserprojectDetails(projectId);
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }

        function authenticate() {
            const { username, password } = body;
            const user = users.find(x => x.username === username && x.password === password);
            if (!user) { return error('Username or password is incorrect'); }
            user.authdata = window.btoa(`${username}:${password}`);
            return ok(user);
        }

        function getUsers() {
            if (!isLoggedIn()) { return unauthorized(); }
            return ok(users);
        }

        function getUserprojects(userId: number) {
            if (!isLoggedIn()) { return unauthorized(); }
            const userProjectIds = users.find((user) => user.id === userId).projectTracker.projects.map(
                project => project.id
            );
            const projects = mockProjects.filter(project => {
                return userProjectIds.findIndex(t => {
                    return t === project.id;
                }) !== -1;
            });
            return ok(projects);
        }

        function getUserprojectDetails( projectId: string) {
            if (!isLoggedIn()) { return unauthorized(); }
            const project = mockProjects.find(project => {
                return project.id === projectId;
            });
            project.stories = mockStories.find(t => t.projectId === project.id);
            return ok(project);
        }

        // helper functions

        // tslint:disable-next-line: no-shadowed-variable
        function ok(body?: any) {
            return of(new HttpResponse({ status: 200, body }));
        }

        function error(message) {
            return throwError({ error: { message } });
        }

        function unauthorized() {
            return throwError({ status: 401, error: { message: 'Unauthorised' } });
        }

        function isLoggedIn() {
            const userAuth = JSON.parse(localStorage.getItem('user')).authdata;
            return headers.get('Authorization') === `${userAuth}`;
        }
    }
}

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};
