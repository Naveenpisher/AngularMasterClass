import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TodoAppService {
    constructor(private httpClient: HttpClient) { }

    baseUrl = 'http://localhost:8000/api';
    public getTodoTasks(): Observable<any> {
        return this.httpClient.get(`${this.baseUrl}/todoApp`);
    }
}
