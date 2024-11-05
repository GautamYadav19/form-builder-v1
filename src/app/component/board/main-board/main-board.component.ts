import { Component, OnInit } from '@angular/core';
import { CreateInputElementComponent } from '../../elements/input-element/create-input-element/create-input-element.component';
import { EditInputElementComponent } from '../../elements/input-element/edit-input-element/edit-input-element.component';
import { LocalService } from '../../custom-classes/localService';

@Component({
  selector: 'app-main-board',
  templateUrl: './main-board.component.html',
  styleUrls: ['./main-board.component.css'],
})
export class MainBoardComponent implements OnInit {
  Elements: any = [
    {
      elementName: 'Input',
      element: CreateInputElementComponent,
      editElement: EditInputElementComponent,
      isEditable: false,
    },
  ];

  showListOfRenderELements: any[] = [];
  //   {
  //   componentId: string;
  //   elementName: string;
  //   componentType: any;
  //   editElement: any;
  //   isEditable: boolean;
  // }[] = [];

  constructor(private ls: LocalService) {}

  drag(event: DragEvent, element: any) {
    event.dataTransfer?.setData('elementName', element);
  }
  drop(event: DragEvent) {
    event.preventDefault();

    let selectElement = event.dataTransfer?.getData('elementName');

    let newElement = this.Elements.find((element: any) => {
      return element.elementName == selectElement;
    });

    // Append new element to the list
    this.showListOfRenderELements.push({
      componentId: this.generateUniqueId(),
      elementName: newElement.elementName,
      componentType: newElement.element,
      editElement: newElement.editElement,
      isEditable: false,
    });

    this.ls.saveData('showListOfRenderELements', this.showListOfRenderELements);

    console.log(
      'show',
      this.ls.getData('showListOfRenderELements'),
      this.showListOfRenderELements
    );
  }

  ngOnInit(): void {
    this.ls?.elementUpdated.subscribe((data) => {
      console.log(data);
    });
  }

  generateUniqueId(): string {
    const now = new Date();
    const date = now.toISOString().slice(0, 10).replace(/-/g, '');
    const seconds = Math.floor(now.getTime() / 1000);
    const milliseconds = now.getMilliseconds();
    return `${date}-${seconds}-${milliseconds}`;
  }

  allowDrop(event: DragEvent) {
    event.preventDefault();
    // not use right now
  }
}
