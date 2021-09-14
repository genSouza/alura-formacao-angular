import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss'],
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

  /**
   * @internal
   */
  constructor() {}

  public writeValue(value: any): void {
    this.value = value;
    this.onChange(this.value);
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

  /**
   * @internal
   */
  ngOnInit(): void {}

  public activate(value: string): void {
    this.value = value;
    this.valueChange.emit(this.value);
  }
}

enum YesNoButtonGroupOptions {
  YES = 'yes',
  NO = 'no',
}
