import { Component, OnInit } from '@angular/core';
import { EditLayoutElementsComponent } from '../edit-layout-elements/edit-layout-elements.component';
import { LocalService } from '../../custom-classes/localService';

@Component({
  selector: 'app-common-layout-render',
  templateUrl: './common-layout-render.component.html',
  styleUrls: ['./common-layout-render.component.css'],
})
export class CommonLayoutRenderComponent implements OnInit {
  constructor(private ls: LocalService) {}
  identifier!: string;
  class: any;
  droppedItems: any[] = [];
  data: any;
  ngOnInit(): void {}
  cellInit(identifier: string, data: any) {
    this.class = data.class;
    this.identifier = identifier;
  }

  drop(event: any) {
    event.preventDefault();
    let componentId = this.generateUniqueId();
    this.ls.saveData('innerLayout', {
      componentId: componentId,
      identifier: this.identifier,
      class: this.class,
      componentType: CommonLayoutRenderComponent,
      data: { data: this.class },
    });

    this.droppedItems.push({
      componentId: componentId,
      identifier: this.identifier,
      class: this.class,
      componentType: CommonLayoutRenderComponent,
      data: { data: this.class },
    });
  }

  drag(event: DragEvent) {
    event.preventDefault();
  }
  generateUniqueId(): string {
    const now = new Date();
    const date = now.toISOString().slice(0, 10).replace(/-/g, '');
    const seconds = Math.floor(now.getTime() / 1000);
    const milliseconds = now.getMilliseconds();
    return `${date}-${seconds}-${milliseconds}`;
  }
}
