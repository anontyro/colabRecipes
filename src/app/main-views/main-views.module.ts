import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexViewComponent } from './index-view/index-view.component';
import { AboutViewComponent } from './about-view/about-view.component';
import { LoginViewComponent } from './auth/login-view/login-view.component';
import { LogoutViewComponent } from './auth/logout-view/logout-view.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    IndexViewComponent,
    AboutViewComponent,
    LoginViewComponent,
    LogoutViewComponent,
  ],
  exports: [
    IndexViewComponent,
    AboutViewComponent,
    LoginViewComponent,
    LogoutViewComponent
  ]
})
export class MainViewsModule { }
