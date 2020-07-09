import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-project-tracker-story-view',
    templateUrl: 'project-tracker-story-view.component.html'
})

export class ProjectTrackerStoryViewComponent implements OnInit {
    public collapse = false;
    @Input() story: any = {};

    constructor() { }

    ngOnInit() { }
}
