import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexViewComponent } from './index-view/index-view.component';
import { AboutViewComponent } from './about-view/about-view.component';
import { LoginViewComponent } from './auth/login-view/login-view.component';
import { LogoutViewComponent } from './auth/logout-view/logout-view.component';
import { AddNewRecipeComponent } from './add-new-recipe/add-new-recipe.component';
import { DetailRecipeComponent } from './detail-recipe/detail-recipe.component';
import { FeaturesModule } from '../features/features.module';

@NgModule({
  imports: [
    CommonModule,
    FeaturesModule,
  ],
  declarations: [
    IndexViewComponent,
    AboutViewComponent,
    LoginViewComponent,
    LogoutViewComponent,
    AddNewRecipeComponent,
    DetailRecipeComponent,
  ],
  exports: [
    IndexViewComponent,
    AboutViewComponent,
    LoginViewComponent,
    LogoutViewComponent,
    AddNewRecipeComponent,
    DetailRecipeComponent
  ]
})
export class MainViewsModule { }
