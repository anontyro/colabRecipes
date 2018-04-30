import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { myRoutes } from './myRoutes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(myRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
