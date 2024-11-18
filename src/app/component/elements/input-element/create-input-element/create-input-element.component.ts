import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { LocalService } from 'src/app/component/custom-classes/localService';

@Component({
  selector: 'app-create-input-element',
  templateUrl: './create-input-element.component.html',
  styleUrls: ['./create-input-element.component.css'],
})
export class CreateInputElementComponent implements OnInit {
  identifier!: string;
  label!: string;
  type: any;
  class: any;
  formControlName: any;
  defaultValue: any;
  elementDetails: any;

  cellInit(identifier: any) {
    this.identifier = identifier;
  }

  constructor(private ls: LocalService) {
    ls.elementUpdated.subscribe(() => {
      this.changeDetectbySubject();
    });
  }

  ngOnInit(): void {
    let list = this.ls.getData('showListOfRenderELements');
    if (list) {
      this.changeDetectbySubject();
    }
  }

  changeDetectbySubject() {
    let list = this.ls.getData('showListOfRenderELements');
    let element = list.find((e: any) => e.componentId == this.identifier);
    this.label = element?.data?.label;
    this.type = element?.data?.basicInputField?.type;

    this.class = element?.data?.basicInputField?.class;
    this.formControlName = element?.data?.basicInputField?.formControlName;
    this.defaultValue = element?.data?.basicInputField?.defaultValue;
  }
}
