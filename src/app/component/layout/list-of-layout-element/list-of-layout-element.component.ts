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
  listOfLayoutElment = [{ elementName: 'container' }, { elementName: 'row' }];
  @Output() layoutElementData = new EventEmitter();
  constructor(private ls: LocalService) {}
  drag(event: DragEvent, elementName: string) {
    if (elementName == 'container') {
      let data = {
        layoutElementId: this.generateUniqueId(),
        class: 'container',
        defaultBgColor: 'grey',
      };
      event.dataTransfer?.setData('layout', JSON.stringify(data));
    }
    if (elementName == 'row') {
      let data = {
        layoutElementId: this.generateUniqueId(),
        class: 'row',
        defaultBgColor: 'grey',
      };
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
