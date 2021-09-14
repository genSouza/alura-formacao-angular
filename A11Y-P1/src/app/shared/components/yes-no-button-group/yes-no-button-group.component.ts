import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss'],
})
export class YesNoButtonGroupComponent implements OnInit {
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

  options = YesNoButtonGroupOptions;
  /**
   * @internal
   */
  constructor() {}

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
