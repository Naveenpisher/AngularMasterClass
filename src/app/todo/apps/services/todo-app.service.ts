import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class TodoAppService {
    constructor(private httpClient: HttpClient) { }
    public getTodoTasks(): Observable<any> {
        return this.httpClient.get(`${environment.apiUrl}/todoApp`);
    }

    public addNewToDo(todo: any): Observable<any> {
        return this.httpClient.post(`${environment.apiUrl}/todoApp`, todo);
    }

    public editTodo(todo: any): Observable<any> {
        return this.httpClient.put(`${environment.apiUrl}/todoApp/${todo.id}`, { id: todo.id, taskName: todo.taskName })
    }
    public deleteTodo(todo: any): Observable<any> {
        return this.httpClient.delete(`${environment.apiUrl}/todoApp/${todo.id}`);
    }
}
