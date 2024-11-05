import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateInputElementComponent } from './component/elements/input-element/create-input-element/create-input-element.component';
import { EditInputElementComponent } from './component/elements/input-element/edit-input-element/edit-input-element.component';
import { MainBoardComponent } from './component/board/main-board/main-board.component';
import { RenderComponentDirective } from './directives/render-component.directive';

@NgModule({
  declarations: [
    AppComponent,
    CreateInputElementComponent,
    EditInputElementComponent,
    MainBoardComponent,
    RenderComponentDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
