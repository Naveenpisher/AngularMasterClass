

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAppRoutingModule } from './todo-app.routing-module';
import { TodoAppHomeComponent } from './components/todo-app-home.component';
import { FormsModule } from '@angular/forms';
import { TodoAppService } from './services/todo-app.service';

@NgModule({
    declarations: [
        TodoAppHomeComponent
    ],
    imports: [
        CommonModule,
        TodoAppRoutingModule,
        FormsModule
    ],
    providers: [TodoAppService],
})
export class TodoAppModule { }
