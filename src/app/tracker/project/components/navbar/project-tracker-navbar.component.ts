import { Component } from '@angular/core';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-tracker-navbar',
  templateUrl: './project-tracker-navbar.component.html',
})
export class ProjectTrackerNavComponent {
  constructor(public userAuthService: UserAuthService, private router: Router){}
  title = 'ProjectManagement';
  public logOut() {
    this.userAuthService.logout();
  }
}
