import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as uuid from 'uuid';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => YesNoButtonGroupComponent),
    },
  ],
})
export class YesNoButtonGroupComponent implements OnInit, ControlValueAccessor {
  /**
   *
   */
  @Input()
  public value: string = null;

  /**
   *
   */
  @Input()
  public label = '';

  /**
   * value button output
   */
  @Output()
  public valueChange = new EventEmitter<string>();

  /**
   * Component default options
   */

  public options = YesNoButtonGroupOptions;

  public onChange = (value: string) => {};
  public onTouched = () => {};

  public id: string = null;

  /**
   * @internal
   */
  constructor() {
    this.id = `yes-no-button-group-${uuid.v1()}`;
  }

  /**
   * @internal
   */
  ngOnInit(): void {}

  public writeValue(value: any): void {
    this.value = value;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  public activate(value: string): void {
    this.writeValue(value);
  }
}

enum YesNoButtonGroupOptions {
  YES = 'yes',
  NO = 'no',
}
