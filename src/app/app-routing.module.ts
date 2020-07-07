import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'app',
    loadChildren : () => import('./starter/starter.module').then(m => m.StartModule),
  },
  {
    path: 'project-tracker',
    loadChildren : () => import('./tracker/project/project-tracker.module').then(m => m.ProjectTrackerModule),
  },
  {
    path: '',
    redirectTo: '/app',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
