import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateInputElementComponent } from './component/elements/input-element/create-input-element/create-input-element.component';
import { EditInputElementComponent } from './component/elements/input-element/edit-input-element/edit-input-element.component';
import { MainBoardComponent } from './component/board/main-board/main-board.component';
import { RenderComponentDirective } from './directives/render-component.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { ListOfLayoutElementComponent } from './component/layout/list-of-layout-element/list-of-layout-element.component';
import { CommonLayoutRenderComponent } from './component/layout/common-layout-render/common-layout-render.component';
import { EditLayoutElementsComponent } from './component/layout/edit-layout-elements/edit-layout-elements.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateInputElementComponent,
    EditInputElementComponent,
    MainBoardComponent,
    RenderComponentDirective,
    ListOfLayoutElementComponent,
    CommonLayoutRenderComponent,
    EditLayoutElementsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
