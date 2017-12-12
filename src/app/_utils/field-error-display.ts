import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-field-error-display',
  template: `
    <div *ngIf="isError">
        <span [style.color]="errorcolor">{{errorMessage}}</span>
    </div>
  `
})
export class FieldErrorDisplayComponent {
    errorcolor = "red";
    @Input() errorMessage: string;
    @Input() isError: boolean;
}
