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
  isHighlighted: boolean = false;
  identifier!: string;
  class: any;
  droppedItems: any[] = [];
  data: any;
  ngOnInit(): void {}
  cellInit(identifier: string, data: any) {
    this.class = data.class;
    this.identifier = identifier;
  }

  onDragEnter(event: Event, newClass: any) {
    this.isHighlighted = true;
    console.log('enter');
  }

  onDragLeave(event: Event) {
    this.isHighlighted = false;
  }
  drop(event: DragEvent) {
    event.preventDefault();
    event.stopImmediatePropagation();

    this.isHighlighted = false;
    let newElementData = JSON.parse(event.dataTransfer?.getData('layout')!);
    console.log(newElementData.class);

    let componentId = this.generateUniqueId();
    // Save data using the LocalService
    this.ls.saveData('innerLayout', {
      componentId: componentId,
      identifier: this.identifier,
      componentType: CommonLayoutRenderComponent,
      data: { data: newElementData.class },
    });

    // Add the new item to droppedItems array
    this.droppedItems.push({
      componentId: componentId,
      identifier: this.identifier,
      componentType: CommonLayoutRenderComponent,
      data: { class: newElementData.class },
    });
  }

  generateUniqueId(): string {
    const now = new Date();
    const date = now.toISOString().slice(0, 10).replace(/-/g, '');
    const seconds = Math.floor(now.getTime() / 1000);
    const milliseconds = now.getMilliseconds();
    return `${date}-${seconds}-${milliseconds}`;
  }
  trackByComponentId(index: number, item: any): string {
    return item.componentId; // Use the componentId as a unique identifier
  }
}
