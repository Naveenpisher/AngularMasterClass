import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TodoAppService } from './../services/todo-app.service';


@Component({
    selector: 'app-todo-home',
    templateUrl: './todo-app-home.component.html'
})

export class TodoAppHomeComponent implements OnInit {

    constructor(private httpClient: HttpClient, private todoAppService: TodoAppService) { }
    public todoList: any[] = [];
    public newTodoTask = null;
    baseUrl = 'http://localhost:8000/api';
    public searchText: string;
    public updateBtn = false;
    public editTodoId: number;
    public loadSpinner = true;
    public nonFilteredList: any[];
    ngOnInit(): void {
        this.getTodoTasks();
    }
    public getTodoTasks(): any {
        this.todoAppService.getTodoTasks().subscribe((data: any[]) =>
            (this.todoList = data, this.nonFilteredList = data, this.loadSpinner = false), (err) => console.log(err));
    }
    public addNewToDo() {
        this.loadSpinner = true;
        this.todoAppService.addNewToDo({ taskName: this.newTodoTask })
            .subscribe((data: any[]) => {
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
        this.todoAppService.editTodo({ id: this.editTodoId, taskName: this.newTodoTask }).subscribe(
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
            this.todoAppService.deleteTodo(todo).subscribe(
                (data) => {
                    console.log((data));
                    this.getTodoTasks();
                }, (err) => (console.log(err))
            );
        }
        return;
    }
}
