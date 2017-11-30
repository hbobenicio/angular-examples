import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  /**
   * This is still a property.
   * But this only overrides the setter of it, called whenever it changes.
   *
   * If it hasn't the same name as the selector, it will not be able to bind this prop like this: *appUnless="exp"
   * So this prop name must match the selector's name.
   */
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {

  }

}
