import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
