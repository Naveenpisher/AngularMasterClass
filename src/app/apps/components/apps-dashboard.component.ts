import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './apps-dashboard.component.html'
})

export class AppDashBoardComponent implements OnInit {
    constructor(private router: Router, public userService: UserAuthService) { }

    ngOnInit() {

    }

    viewProject() {
        this.router.navigateByUrl('project-tracker/dashboard');
        return '';
    }

    public get showTimeTracker(): boolean {
        return this.userService.userValue?.access?.timeTrackerAccess;
    }
    public viewTodoApp() {
        this.router.navigateByUrl('todo-app');
    }

    public logOut() {
        this.userService.logout();
    }
}
