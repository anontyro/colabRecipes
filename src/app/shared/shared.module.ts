import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { RoutingModule } from '../routing/routing.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RoutingModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
  ],
  declarations: [],
  exports: [
    FormsModule,
    HttpClientModule,
    RoutingModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
  ]
})
export class SharedModule { }
