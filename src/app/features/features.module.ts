import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { RoutingModule } from '../routing/routing.module';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,

  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    RecipeFormComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    RecipeFormComponent,
  ]

})
export class FeaturesModule { }
