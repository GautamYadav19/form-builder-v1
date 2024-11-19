import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LocalService } from '../../custom-classes/localService';
type Layout = {
  [key: string]: any; // Allowing any structure to be nested
};
@Component({
  selector: 'app-list-of-layout-element',
  templateUrl: './list-of-layout-element.component.html',
  styleUrls: ['./list-of-layout-element.component.css'],
})
export class ListOfLayoutElementComponent implements OnInit {
  listOfLayoutElment = [
    { elementName: 'container' },
    { elementName: 'row' },
    { elementName: 'col-md-6' },
  ];
  @Output() layoutElementData = new EventEmitter();
  constructor(private ls: LocalService) {}
  drag(event: DragEvent, elementName: string) {
    console.log('list', elementName);

    if (elementName == 'container') {
      let data = {
        layoutElementId: this.generateUniqueId(),
        class: 'container',
      };
      event.dataTransfer?.setData('layout', JSON.stringify(data));
    }
    if (elementName == 'row') {
      let data = {
        layoutElementId: this.generateUniqueId(),
        class: 'row',
      };
      event.dataTransfer?.setData('layout', JSON.stringify(data));
    }
    if (elementName == 'col-md-6') {
      let data = {
        layoutElementId: this.generateUniqueId(),
        class: 'col-md-6',
      };
      console.log('col-6');

      event.dataTransfer?.setData('layout', JSON.stringify(data));
    }
  }
  ngOnInit(): void {}
  sendDataToParentComponent(event: DragEvent, data: any) {
    this.layoutElementData.emit({ event, data });
  }
  generateUniqueId(): string {
    const now = new Date();
    const date = now.toISOString().slice(0, 10).replace(/-/g, '');
    const seconds = Math.floor(now.getTime() / 1000);
    const milliseconds = now.getMilliseconds();
    return `${date}-${seconds}-${milliseconds}`;
  }
}
