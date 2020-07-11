import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectTrackerNavComponent } from './components/navbar/project-tracker-navbar.component';
import { ProjectTrackerHomeComponent } from './components/home/project-tracker-home.component';
import { ProjectTrackerDashboardComponent } from './components/dashboard/project-tracker-dashboard.component';
import { ProjectTrackerRoutingModule } from './project-tracker-routing.module';
import { PTrackerProjectListComponent } from './components/project-list/p-tracker-project-list.component';
import { ProjectTrackerProjectWrapperComponent } from './components/project-wrapper/project-wrapper.component';
import { ProjectTrackerSidebarComponent } from './components/sidebar/project-tracker-sidebar.componnet';
import { ProjectTrackerStoryListComponent } from './components/story-list/project-tracker-story-list.component';
import { ProjectTrackerStoryViewComponent } from './components/story/project-tracker-story-view.component';
import { ProjectTrackerWorkSpaceListComponent } from './components/workspace-list/project-tracker-workspace.component';
import { ProjectService } from './services/project.service';


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
        ProjectTrackerRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [ProjectService],
})
export class ProjectTrackerModule { }
