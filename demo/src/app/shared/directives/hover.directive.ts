import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor( private elementRef: ElementRef ) { }

  @HostListener( 'mouseover' )
  makeRed() {
    this.elementRef.nativeElement.style.color = 'red';
  }
}
