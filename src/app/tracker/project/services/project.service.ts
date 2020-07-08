import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ProjectService {
    constructor(private httpClient: HttpClient) { }
    public getUserProjects(userId: string): Observable<any> {
        return this.httpClient.get(`${environment.apiUrl}/userProjects?userId=${userId}`);
    }
}
