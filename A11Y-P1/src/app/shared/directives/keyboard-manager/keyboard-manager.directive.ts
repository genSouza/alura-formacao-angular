import { KeyboardManagedItemDirective } from './keyboard-managed-item.directive';
import {
  ContentChildren,
  Directive,
  HostListener,
  QueryList,
} from '@angular/core';

@Directive({
  selector: '[appKm]',
})
export class KeyboardManagerDirective {
  @ContentChildren(KeyboardManagedItemDirective)
  public items: QueryList<KeyboardManagedItemDirective> = null;

  @HostListener('keyup', ['$event'])
  public manageKeys(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowUp':
        this.MoveFocus(ArrowDirection.RIGHT).focus();
        break;
      case 'ArrowDown':
        this.MoveFocus(ArrowDirection.LEFT).focus();
        break;
      case 'ArrowLeft':
        this.MoveFocus(ArrowDirection.LEFT).focus();
        break;
      case 'ArrowRight':
        this.MoveFocus(ArrowDirection.RIGHT).focus();
        break;
      default:
        break;
    }
  }

  public MoveFocus(direction: ArrowDirection): KeyboardManagedItemDirective {
    const items = this.items.toArray();
    const currentSelectedIndex = items.findIndex((item) => item.isFocused());
    const targetElementFocus = items[currentSelectedIndex + direction];
    if (targetElementFocus) {
      return targetElementFocus;
    }

    return direction === ArrowDirection.LEFT
      ? items[items.length - 1]
      : items[0];
  }
}

enum ArrowDirection {
  LEFT = -1,
  RIGHT = 1,
}
