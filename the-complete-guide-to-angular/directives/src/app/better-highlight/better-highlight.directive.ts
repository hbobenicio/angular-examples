import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  // This string must match the path to the property starting from the
  // elementRef.nativeElement object!
  @HostBinding('style.fontWeight') fontWeight: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // Using the Renderer is a better approach than acessing the DOM directly,
    // because in some environments, you may not have access to the DOM (for example, when
    // working with Service Workers - not running in a browser)
    //
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
    this.fontWeight = 'bold';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black');
    this.fontWeight = 'normal';
  }
}
