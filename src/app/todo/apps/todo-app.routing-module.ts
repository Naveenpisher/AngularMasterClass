import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoAppHomeComponent } from './components/todo-app-home.component';



const routes: Routes = [
    {
        path: '',
        component: TodoAppHomeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TodoAppRoutingModule { }
