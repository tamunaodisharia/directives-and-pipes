import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Status } from '../Model/user.model';
@Directive({
  selector: '[appColor]',
})
export class ColorDirective {
  @Input('appColor') appColor!: Status;
  color: string = '';
  constructor(private ref: ElementRef) {}

  colorChange() {
    switch (this.appColor) {
      case Status.active:
        this.color = 'green';
        break;
      case Status.inactive:
        this.color = 'blue';
        break;
      case Status.deleted:
        this.color = 'red';
        break;
    }
    this.ref.nativeElement.style.background = this.color;
  }

  @HostListener('click')
  onClick() {
    this.color = 'yellow';
    this.ref.nativeElement.style.background = this.color;
  }
  ngOnInit() {
    this.colorChange();
  }
}
