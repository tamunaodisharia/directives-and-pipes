import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeSquareColor]',
})
export class ChangeSquareColorDirective {
  constructor(private ref: ElementRef) {}

  @HostListener('mouseover')
  onMouseOver() {
    this.ref.nativeElement.style.background = 'green';
  }
}
