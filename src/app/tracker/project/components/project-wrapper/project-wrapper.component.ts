import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { User } from 'src/app/model/user.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-project-tracker-wrapper',
  templateUrl: './project-wrapper.component.html',
  styleUrls: ['./project-wrapper.component.scss']
})
export class ProjectTrackerProjectWrapperComponent implements OnInit {
  constructor(
    private userService: UserAuthService,
    private projectService: ProjectService,
    private activatedRoute: ActivatedRoute) { }

  public userInfo: User;
  public projects: any;
  ngOnInit(): void {
    this.userInfo = this.userService.userValue;
    if (this.userInfo && this.userInfo.id) {
      this.activatedRoute.queryParams.subscribe((params: Params) => {
        if (params.projectId) {
          this.projectService.getUserProjectDetails(this.userInfo.id, params.projectId).subscribe(
            (projects) => {
              this.projects = projects;
            },
            (err) => console.log(err)
          );
        }
      });
    }
  }
}
