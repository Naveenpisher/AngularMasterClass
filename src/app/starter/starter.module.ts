import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StartRoutingModule } from './start-routing-module';
import { StarterHomeComponent } from './home/starter-home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './home-content/navbar/navbar.component';
import { WelcomeContentComponent } from './home-content/welcome-content/welcome-content.component';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
    declarations: [
        StarterHomeComponent,
        LoginComponent,
        SignUpComponent,
        NavbarComponent,
        WelcomeContentComponent
    ],
    imports: [
        CommonModule,
        StartRoutingModule,
        FormsModule
    ],
    providers: [],
})
export class StartModule { }
