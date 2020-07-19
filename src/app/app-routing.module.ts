import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth-guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren : () => import('./starter/starter.module').then(m => m.StartModule),
  },
  {
    path: 'apps',
    loadChildren : () => import('./apps/apps.module').then(m => m.AppsOverviewModule),
  },
  {
    path: 'project-tracker',
    loadChildren : () => import('./tracker/project/project-tracker.module').then(m => m.ProjectTrackerModule),
  },
  {
    path: 'todo-app',
    loadChildren : () => import('./todo/apps/todo-app.module').then(m => m.TodoAppModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
