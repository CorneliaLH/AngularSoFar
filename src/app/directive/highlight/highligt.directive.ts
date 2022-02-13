// import { variable } from '@angular/compiler/src/output/output_ast';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighligt]',
})
export class HighligtDirective {
  @Input('appHighligt') speed: number = 0.5;
  uppercase: boolean = false;

  constructor(private el: ElementRef) {}
  @HostListener('mouseenter') onMouseEnter() {
    const variable1 = this.el.nativeElement as HTMLElement;
    variable1.style.transition = 'all ' + this.speed + 's';
    variable1.style.color = 'white';
    variable1.style.backgroundColor = 'teal';
    variable1.style.textTransform = 'uppercase';
  }
  @HostListener('mouseleave') onMouseLeave() {
    const variable2 = this.el.nativeElement as HTMLElement;
    variable2.style.backgroundColor = 'transparent';
    variable2.style.color = 'rgb(78, 31, 31)';
    variable2.style.transition = 'all ' + this.speed + 's';
    variable2.style.textTransform = 'lowercase';
  }
}
