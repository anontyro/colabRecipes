import { RouterModule, Routes } from '@angular/router';
import { IndexViewComponent } from '../main-views/index-view/index-view.component';
import { AboutViewComponent } from '../main-views/about-view/about-view.component';

export const myRoutes: Routes = [
    {path: '', component: IndexViewComponent},
    {path: 'about', component: AboutViewComponent},
];
