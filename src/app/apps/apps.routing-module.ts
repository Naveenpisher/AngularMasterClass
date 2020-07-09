import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppDashBoardComponent } from './components/apps-dashboard.component';



const routes: Routes = [
    {
        path: '',
        component: AppDashBoardComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppsRoutingModule { }
