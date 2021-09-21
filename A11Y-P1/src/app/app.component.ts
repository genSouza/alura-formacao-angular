import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public formGroup: FormGroup = null;
  title = 'a11y-p1';

  /**
   *@internal
   */
  constructor(formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      yesNoAnswer: [
        {
          value: null,
          disabled: false,
        },
      ],
    });
  }

  public submit(): void {
    this.formGroup.get('yesNoAnswer').disable();
    console.log(this.formGroup.value);
  }
}
