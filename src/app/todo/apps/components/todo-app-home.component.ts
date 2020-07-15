import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
    selector: 'app-todo-home',
    templateUrl: './todo-app-home.component.html'
})

export class TodoAppHomeComponent implements OnInit {
    items: Observable<any[]>;
    constructor() {
    }
    ngOnInit(): void {
    }

}
