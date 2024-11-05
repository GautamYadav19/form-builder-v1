import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/component/custom-classes/localService';

@Component({
  selector: 'app-edit-input-element',
  templateUrl: './edit-input-element.component.html',
  styleUrls: ['./edit-input-element.component.css'],
})
export class EditInputElementComponent implements OnInit {
  identifier!: string;
  constructor(private ls: LocalService) {}

  ngOnInit(): void {}
  cellInit(identifier: any) {
    this.identifier = identifier;
  }
  addLabel(data: any) {
    let list = this.ls.getData('showListOfRenderELements');
    let index = list.findIndex((e: any) => e.componentId == this.identifier);
    let element = list.find((e: any) => e.componentId == this.identifier);
    element.data = {
      label: data,
    };
    list.splice(index, 1, element);
    this.ls.saveData('showListOfRenderELements', list);

    this.ls.setElementUpdatedValue(data);
  }
}
