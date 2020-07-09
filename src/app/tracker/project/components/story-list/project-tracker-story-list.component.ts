import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-tracker-story-list',
  templateUrl: './project-tracker-story-list.component.html',
  styleUrls: ['./project-tracker-story-list.component.scss']
})
export class ProjectTrackerStoryListComponent {
  title = 'ProjectManagement';
   @Input() stories = [];
}
