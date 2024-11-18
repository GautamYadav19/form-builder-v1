import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  inject,
} from '@angular/core';

@Directive({ selector: '[appCustomFor]' })
export class CustomForDirective {
  protected readonly templateRef = inject(TemplateRef);
  protected readonly viewContainerRef = inject(ViewContainerRef);

  @Input() appCustomForOf: any[] = [];
  @Input() appCustomForEmpty!: TemplateRef<any>;

  ngOnChanges() {
    this.viewContainerRef.clear();

    if (this.appCustomForOf.length === 0 && this.appCustomForEmpty) {
      this.viewContainerRef.createEmbeddedView(this.appCustomForEmpty);
      return;
    }

    this.appCustomForOf.forEach((item, index) => {
      this.viewContainerRef.createEmbeddedView(this.templateRef, {
        $implicit: item,
        index: index,
        isFirst: index === 0,
        isEven: index % 2 === 0,
        isOdd: index % 2 !== 0,
      });
    });
  }
}
