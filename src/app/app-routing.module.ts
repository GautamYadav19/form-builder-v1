import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainBoardComponent } from './component/board/main-board/main-board.component';

const routes: Routes = [{ path: '', component: MainBoardComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
