import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-todo-home',
    templateUrl: './todo-app-home.component.html'
})

export class TodoAppHomeComponent implements OnInit {

    constructor(private httpClient: HttpClient) { }
    public todoList: any[] = [];
    public newTodoTask = null;
    baseUrl = 'http://localhost:8000/api';
    public searchText: string;
    public updateBtn = false;
    public editTodoId: number;
    public loadSpinner = true;
    public nonFilteredList: any[];
    public getTodoTasks(): any {
        this.httpClient.get(`${this.baseUrl}/todoApp`).subscribe((data: any[]) =>
            (this.todoList = data, this.nonFilteredList = data, this.loadSpinner = false), (err) => console.log(err));
    }
    ngOnInit(): void {
        this.getTodoTasks();
    }

    public addNewToDo() {
        this.loadSpinner = true;
        this.httpClient.post(`${this.baseUrl}/todoApp`, { id: this.todoList.length + 1, taskName: this.newTodoTask })
            .subscribe((data: any[]) => {
                // this.todoList = data;
                this.getTodoTasks();
            }, (err) => console.log(err));
        this.newTodoTask = '';
        this.todoList = [];
    }
    public filterTodo() {
        this.todoList = this.nonFilteredList;
        if (this.searchText !== '') {
            this.todoList = this.todoList.filter(t => t.taskName && t.taskName.toLowerCase().indexOf(this.searchText) !== -1);
        }
    }
    public editTodoSet(todo: any) {
        this.updateBtn = true;
        this.editTodoId = todo.id;
        this.newTodoTask = todo.taskName;

    }
    public editTodo() {
        this.loadSpinner = true;
        this.todoList = [];
        this.nonFilteredList = [];
        this.httpClient.put(`${this.baseUrl}/todoApp/${this.editTodoId}`, { id: this.editTodoId, taskName: this.newTodoTask }).subscribe(
            (data => (console.log(data), this.getTodoTasks())), (err => (console.log(err), this.loadSpinner = false))
        );
        this.updateBtn = null;
        this.editTodoId = null;
        this.newTodoTask = null;
    }
    public clearEdit() {
        this.updateBtn = null;
        this.editTodoId = null;
        this.newTodoTask = null;
    }
    public deleteTodo(todo: any) {

        if (window.confirm(`Are you sure want to delete ${todo.taskName}`)) {
            this.loadSpinner = true;
            this.todoList = [];
            this.nonFilteredList = [];
            this.httpClient.delete(`${this.baseUrl}/todoApp/${todo.id}`).subscribe(
                (data) => {
                    console.log((data));
                    this.getTodoTasks();
                }, (err) => (console.log(err))
            );
        }
        return;
    }
}
