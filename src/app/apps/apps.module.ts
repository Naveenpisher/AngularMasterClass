import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppsRoutingModule } from './apps.routing-module';
import { AppDashBoardComponent } from './components/apps-dashboard.component';

@NgModule({
    declarations: [
        AppDashBoardComponent
    ],
    imports: [
        CommonModule,
        AppsRoutingModule
    ],
    providers: [],
})
export class AppsOverviewModule { }
