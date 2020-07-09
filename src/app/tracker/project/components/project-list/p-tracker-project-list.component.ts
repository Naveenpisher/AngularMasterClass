import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { User } from 'src/app/model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-p-tracker-project-list',
  templateUrl: './p-tracker-project-list.component.html',
})
export class PTrackerProjectListComponent implements OnInit {
  constructor(
    private userService: UserAuthService,
    private projectService: ProjectService,
    private router: Router) { }
  public userInfo: User;
  public projects: any;
  ngOnInit(): void {
    this.userInfo = this.userService.userValue;
    if (this.userInfo && this.userInfo.id) {
      this.projectService.getUserProjectSummary(this.userInfo.id).subscribe(
        (projects) => {
          this.projects = projects;
        },
        (err) => console.log(err)
      );
    }
  }
  public viewProject(id: string) {
    this.router.navigate(['/project-tracker/project'], { queryParams: { userId: this.userInfo.id, projectId: id } });
  }
}
