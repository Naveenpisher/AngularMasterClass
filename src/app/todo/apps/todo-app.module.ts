

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAppRoutingModule } from './todo-app.routing-module';
import { TodoAppHomeComponent } from './components/todo-app-home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        TodoAppHomeComponent
    ],
    imports: [
        CommonModule,
        TodoAppRoutingModule,
        FormsModule
    ],
    providers: [],
})
export class TodoAppModule { }
