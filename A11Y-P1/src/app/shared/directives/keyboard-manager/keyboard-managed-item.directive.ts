import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appKmItem]',
})
export class KeyboardManagedItemDirective {
  /**
   * @internal
   */
  constructor(private elementRef: ElementRef<HTMLElement>) {}

  @Output() public focused = new EventEmitter<void>();

  public focus(): void {
    this.elementRef.nativeElement.focus();
    this.focused.emit();
  }

  public isFocused(): boolean {
    return this.elementRef.nativeElement === document.activeElement;
  }
}
