import { Component, OnInit, Input, OnChanges, SimpleChanges, AfterViewInit, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';

@Component({
    selector: 'app-project-tracker-story-view',
    templateUrl: 'project-tracker-story-view.component.html'
})

export class ProjectTrackerStoryViewComponent implements OnInit, OnChanges, AfterViewInit, AfterViewChecked {
    public collapse = false;
    @Input() story: any = {};
    public storyForm: FormGroup;
    // @ViewChild('storyDescription') storyDescription: ElementRef;


    constructor() {
        this.storyForm = this.createFormGroup();
    }
    ngAfterViewChecked(): void {
    }
    ngAfterViewInit(): void {

    }
    ngOnChanges(changes: SimpleChanges): void {
        this.storyForm.patchValue({
            story: {
                name: this.story.name,
                description: this.story.description
            }
        });
    }

    ngOnInit() {
    }

    createFormGroup(): FormGroup {
        return new FormGroup({
            story: new FormGroup({
                name: new FormControl(),
                description: new FormControl(),
            })
        });
    }

    onStorySubmit() {
        return;
    }
    textChanges() {
        console.log(this.storyForm.value);
        // this.storyForm.value.story.description = this.storyForm.value.story.description.replaceAll('↵', '\n');
    }
}


