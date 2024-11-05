import { Component, HostListener, OnInit } from '@angular/core';
import { LocalService } from 'src/app/component/custom-classes/localService';

@Component({
  selector: 'app-create-input-element',
  templateUrl: './create-input-element.component.html',
  styleUrls: ['./create-input-element.component.css'],
})
export class CreateInputElementComponent implements OnInit {
  identifier!: string;
  label!: string;

  cellInit(identifier: any) {
    this.identifier = identifier;
  }

  constructor(private ls: LocalService) {
    ls.elementUpdated.subscribe((data) => {
      this.changeDetectbySubject();
    });
  }

  ngOnInit(): void {}
  changeDetectbySubject() {
    let list = this.ls.getData('showListOfRenderELements');
    let element = list.find((e: any) => e.componentId == this.identifier);
    this.label = element?.data?.label;
  }
}
