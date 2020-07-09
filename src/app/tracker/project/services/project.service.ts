import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ProjectService {
    constructor(private httpClient: HttpClient) { }
    public getUserProjectSummary(userId: number): Observable<any> {
        const params = new HttpParams().set('userId', userId.toString());

        return this.httpClient.get(`${environment.apiUrl}/getUserProjectSummary`, { params });
    }
    public getUserProjectDetails(userId: number, projectId: string): Observable<any> {
        let params = new HttpParams().set('userId', userId.toString());
        params = params.set('projectId', projectId);
        return this.httpClient.get(`${environment.apiUrl}/getUserProjectDetails`, { params });
    }

}
