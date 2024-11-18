import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormControlName, FormGroup } from '@angular/forms';
import { LocalService } from 'src/app/component/custom-classes/localService';

@Component({
  selector: 'app-edit-input-element',
  templateUrl: './edit-input-element.component.html',
  styleUrls: ['./edit-input-element.component.css'],
})
export class EditInputElementComponent implements OnInit, AfterViewInit {
  @ViewChild('label') label!: ElementRef;
  form!: FormGroup;
  //
  inputTypes = [
    // 'button',
    // 'checkbox',
    // 'image',
    // 'radio',
    // 'range',
    // 'reset',
    // 'search',
    // 'submit',
    // 'url',

    'color',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'file',
    'month',
    'number',
    'password',
    'tel',
    'text',
    'time',
    'week',
  ];
  identifier!: string;
  elementDetails: any;
  constructor(private ls: LocalService, private fb: FormBuilder) {}

  cellInit(identifier: any) {
    this.identifier = identifier;
  }

  ngAfterViewInit(): void {
    let list = this.ls.getData('showListOfRenderELements');
    if (list) {
      this.elementDetails = list.find(
        (e: any) => e.componentId == this.identifier
      );
      if (this.elementDetails?.data?.label) {
        this.label.nativeElement.value = this.elementDetails?.data?.label;
      }
    }
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
  basicInputField() {
    let list = this.ls.getData('showListOfRenderELements');
    let index = list.findIndex((e: any) => e.componentId == this.identifier);
    let element = list.find((e: any) => e.componentId == this.identifier);

    element.data.basicInputField = this.form.value;
    list.splice(index, 1, element);
    this.ls.saveData('showListOfRenderELements', list);

    this.ls.setElementUpdatedValue(this.form.value);
  }
  ngOnInit(): void {
    this.initform();
  }
  initform() {
    this.form = this.fb.group({
      class: [''],
      type: [],
      defaultValue: ['defaultValue'],
      formControlName: [''],
    });
  }
}
