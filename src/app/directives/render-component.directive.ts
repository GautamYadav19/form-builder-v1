import { Directive, Input, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRenderComponent]',
})
export class RenderComponentDirective {
  @Input() componentType: any;
  @Input() componentId!: string;
  @Input() layoutData: any; //for layout component
  ref: any;
  constructor(private viewContainerRef: ViewContainerRef) {}

  ngOnInit() {
    this.viewContainerRef.clear();
    this.ref = this.viewContainerRef.createComponent(this.componentType);
    this.ref.instance.identifier = this.componentId;

    this.ref.instance.cellInit(this.componentId, this.layoutData);
  }
}
