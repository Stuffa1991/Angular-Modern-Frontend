import { Routes } from '@angular/router';
import { FrontPageComponent } from './frontpage';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: FrontPageComponent },
  { path: 'home', component: FrontPageComponent },
  { path: 'frontpage',  component: FrontPageComponent },
  { path: 'products', loadChildren: './+products#ProductsModule'},
  { path: '**', component: NoContentComponent },
];
