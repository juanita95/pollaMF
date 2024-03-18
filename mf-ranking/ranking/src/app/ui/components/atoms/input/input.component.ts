import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  
  @Output() currentValue: EventEmitter<string> = new EventEmitter<string>();
  @Input() buttonId: string = 'email';
  @Input() buttonLabel: string = 'Email address';
  @Input() buttonType: string = 'email';
  @Input() buttonIsRequired: boolean = true;
  @Input() buttonStyle: string = '';
  @Input('control') set _(value: any) {
    this.formControl = value as UntypedFormControl;
  }
  inputValue: string = '';
  formControl: UntypedFormControl = new UntypedFormControl();
  constructor() {}

  ngOnInit(): void {}

  getTextInput(event: KeyboardEvent): void {
    this.currentValue.emit(this.inputValue);
  }
}
