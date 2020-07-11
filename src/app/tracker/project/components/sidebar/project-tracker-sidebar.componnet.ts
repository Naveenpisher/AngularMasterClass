import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-tracker-sidebar',
  templateUrl: './project-tracker-sidebar.componnet.html',
  styleUrls: ['./project-tracker-sidebar.component.scss']
})
export class ProjectTrackerSidebarComponent {
  @Input() showcasePanel: any;
}
