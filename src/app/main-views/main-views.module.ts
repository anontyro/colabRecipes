import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexViewComponent } from './index-view/index-view.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    IndexViewComponent,
  ],
  exports: [
    IndexViewComponent
  ]
})
export class MainViewsModule { }
