import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CreateInputElementComponent } from '../../elements/input-element/create-input-element/create-input-element.component';
import { EditInputElementComponent } from '../../elements/input-element/edit-input-element/edit-input-element.component';
import { LocalService } from '../../custom-classes/localService';
import { CommonLayoutRenderComponent } from '../../layout/common-layout-render/common-layout-render.component';
import { EditLayoutElementsComponent } from '../../layout/edit-layout-elements/edit-layout-elements.component';

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
  layoutDetails: any;
  showListOfRenderELements: any[] = [];

  showEditElement: any;

  showlistOfRenderLayoutElement: any[] = [];
  constructor(private ls: LocalService) {}

  layoutElementData(data: any) {
    this.layoutDetails = data;
  }

  drag(event: DragEvent, element: any) {
    event.dataTransfer?.setData('elementName', element);
  }
  drop(event: DragEvent) {
    event.preventDefault();

    let selectElement = event.dataTransfer?.getData('elementName');

    let newElement = this.Elements.find((element: any) => {
      return element.elementName == selectElement;
    });

    if (this.ls.getData('showListOfRenderELements')) {
      this.updateShowList();
    }
    if (selectElement) {
      let componentId = this.generateUniqueId();
      // Append new element to the list
      this.showListOfRenderELements.push({
        componentId: componentId,
        elementName: newElement.elementName,
        componentType: newElement.element,
        editElement: newElement.editElement,
        isEditable: false,
      });
      this.showEditElement = [
        {
          componentId: componentId,
          elementName: newElement.elementName,
          editElement: newElement.editElement,
        },
      ];
      this.ls.saveData(
        'showListOfRenderELements',
        this.showListOfRenderELements
      );
    }

    let layout = JSON.parse(event.dataTransfer?.getData('layout')!);

    if (this.showlistOfRenderLayoutElement.length === 0) {
      this.showlistOfRenderLayoutElement.push({
        componentType: CommonLayoutRenderComponent,
        editElement: EditLayoutElementsComponent,
        data: layout,
      });
    } else if (this.showlistOfRenderLayoutElement.length > 0) {
      let innerLayout = this.ls.getData('innerLayout');
      if (innerLayout) {
        let existingElement = this.showlistOfRenderLayoutElement.find(
          (e: any) => {
            return e.data.layoutElementId === innerLayout.identifier;
          }
        );

        if (existingElement && innerLayout) {
          existingElement[innerLayout.class + ':' + innerLayout.componentId] =
            innerLayout;
        }

        console.log(
          'showlistOfRenderLayoutElement',
          this.showlistOfRenderLayoutElement
        );
        this.ls.removeData('innerLayout');
        this.ls.saveData('layout', this.showlistOfRenderLayoutElement);
      } else {
        this.showlistOfRenderLayoutElement.push({
          componentType: CommonLayoutRenderComponent,
          editElement: EditLayoutElementsComponent,
          data: layout,
        });
      }
    }
    event.dataTransfer?.clearData();
    // if (this.showlistOfRenderLayoutElement.length > 0) {

    // }
  }
  updateShowList() {
    let tempList = this.ls.getData('showListOfRenderELements');
    let newList = [];
    for (let i = 0; i < tempList.length; i++) {
      let tempElement = this.Elements.find((element: any) => {
        return element.elementName == tempList[i].elementName;
      });
      newList[i] = {
        ...tempList[i],
        componentType: tempElement.element,
        editElement: tempElement.editElement,
      };
    }
    this.showListOfRenderELements = newList;
  }
  ngOnInit(): void {
    if (this.ls.getData('showListOfRenderELements')) {
      this.updateShowList();
    }
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
