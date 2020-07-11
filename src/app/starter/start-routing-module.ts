import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarterHomeComponent } from './home/starter-home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './home-content/navbar/navbar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WelcomeContentComponent } from './home-content/welcome-content/welcome-content.component';


const routes: Routes = [
    {
        path: '',
        component : StarterHomeComponent,
        children: [
            {
                path: '',
                component: WelcomeContentComponent
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'sign-up',
                component: SignUpComponent
            },
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartRoutingModule { }
