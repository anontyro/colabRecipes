import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
  ],
  declarations: [],
  exports: [
    FormsModule,
    HttpClientModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
  ]
})
export class SharedModule { }
