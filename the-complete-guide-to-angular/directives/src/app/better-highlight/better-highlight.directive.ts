import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'black';
  @Input() defaultBgColor: string = 'transparent';
  @Input() defaultFontWeight: string = 'normal';

  @Input() highlightColor: string = 'white';
  @Input() highlightBgColor: string = 'blue';
  @Input() highlightFontWeight: string = 'bold';

  // This string must match the path to the property starting from the
  // elementRef.nativeElement object!
  @HostBinding('style.fontWeight') fontWeight: string = this.defaultFontWeight;

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
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', this.highlightBgColor);
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', this.highlightColor);
    this.fontWeight = this.highlightFontWeight;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', this.defaultBgColor);
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', this.defaultColor);
    this.fontWeight = this.defaultFontWeight;
  }
}
