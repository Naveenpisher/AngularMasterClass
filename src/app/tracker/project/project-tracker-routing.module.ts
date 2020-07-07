import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectTrackerHomeComponent } from './home/project-tracker-home.component';
import { ProjectTrackerDashboardComponent } from './dashboard/project-tracker-dashboard.component';
import { PTrackerProjectListComponent } from './project-list/p-tracker-project-list.component';
import { ProjectTrackerWorkSpaceListComponent } from './workspace-list/project-tracker-workspace.component';
import { ProjectTrackerProjectWrapperComponent } from './project-wrapper/project-wrapper.component';

const routes: Routes = [
    {
        path: '',
        component : ProjectTrackerHomeComponent,
        children: [
          {
            path: 'dashboard',
            component: ProjectTrackerDashboardComponent,
            children: [
              {
                path: '',
                component: PTrackerProjectListComponent
              },
              {
                path: 'workspace-list',
                component: ProjectTrackerWorkSpaceListComponent
              }
            ]
          },
          {
            path: 'project',
            component: ProjectTrackerProjectWrapperComponent
          }
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectTrackerRoutingModule { }
