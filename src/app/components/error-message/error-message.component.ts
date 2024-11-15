import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent  implements OnInit {

  @Input() message: string;
  @Input() validator: 'email' | 'required';
  @Input() field: AbstractControl | null;

  constructor() { }

  ngOnInit() {}

  shouldShow() {
    return this.field?.touched && this.field?.errors?.[this.validator]
  }

}
