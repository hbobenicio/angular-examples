import { Directive, ElementRef, OnInit } from '@angular/core';


// A Directive, unlike a component, doesn't have a view/template, therefore it doesn't have OnView* hooks
@Directive({
  selector: '[appBasicHighlight]' // Wrapping inside brackets make it an attr directive
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    // Not a good approach!!! See BetterHighlightDirective on how to do it better
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
