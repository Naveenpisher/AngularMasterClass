import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectTrackerHomeComponent } from './components/home/project-tracker-home.component';
import { ProjectTrackerDashboardComponent } from './components/dashboard/project-tracker-dashboard.component';
import { PTrackerProjectListComponent } from './components/project-list/p-tracker-project-list.component';
import { ProjectTrackerWorkSpaceListComponent } from './components/workspace-list/project-tracker-workspace.component';
import { ProjectTrackerProjectWrapperComponent } from './components/project-wrapper/project-wrapper.component';
import { AuthGuard } from 'src/app/guards/auth-guard';

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
            ],
            canActivate: [AuthGuard]
          },
          {
            path: 'project',
            component: ProjectTrackerProjectWrapperComponent,
            canActivate: [AuthGuard]
          }
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectTrackerRoutingModule { }
