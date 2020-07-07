import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectTrackerNavComponent } from './navbar/project-tracker-navbar.component';
import { ProjectTrackerHomeComponent } from './home/project-tracker-home.component';
import { ProjectTrackerDashboardComponent } from './dashboard/project-tracker-dashboard.component';
import { ProjectTrackerRoutingModule } from './project-tracker-routing.module';
import { PTrackerProjectListComponent } from './project-list/p-tracker-project-list.component';
import { ProjectTrackerWorkSpaceListComponent } from './workspace-list/project-tracker-workspace.component';
import { ProjectTrackerProjectWrapperComponent } from './project-wrapper/project-wrapper.component';
import { ProjectTrackerSidebarComponent } from './sidebar/project-tracker-sidebar.componnet';
import { ProjectTrackerStoryListComponent } from './story-list/project-tracker-story-list.component';
import { ProjectTrackerStoryViewComponent } from './story/project-tracker-story-view.component';


@NgModule({
    declarations: [
        ProjectTrackerNavComponent,
        ProjectTrackerHomeComponent,
        ProjectTrackerDashboardComponent,
        PTrackerProjectListComponent,
        ProjectTrackerWorkSpaceListComponent,
        ProjectTrackerProjectWrapperComponent,
        ProjectTrackerSidebarComponent,
        ProjectTrackerStoryListComponent,
        ProjectTrackerStoryViewComponent
    ],
    imports: [
        CommonModule,
        ProjectTrackerRoutingModule
    ],
    providers: [],
})
export class ProjectTrackerModule { }
