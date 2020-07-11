import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'apps-dashboard.component.html'
})

export class AppDashBoardComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() { }

    viewProject() {
        this.router.navigateByUrl('project-tracker/dashboard');
        return '';
    }
}
