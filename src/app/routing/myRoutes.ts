import { RouterModule, Routes } from '@angular/router';
import { IndexViewComponent } from '../main-views/index-view/index-view.component';
import { AboutViewComponent } from '../main-views/about-view/about-view.component';
import { AddNewRecipeComponent } from '../main-views/add-new-recipe/add-new-recipe.component';
import { DetailRecipeComponent } from '../main-views/detail-recipe/detail-recipe.component';

export const myRoutes: Routes = [
    {path: '', component: IndexViewComponent},
    {path: 'about', component: AboutViewComponent},
    {path: 'add', component: AddNewRecipeComponent},
    {path: 'detail/:id', component: DetailRecipeComponent}
];
