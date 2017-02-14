import { ProductsComponent } from './products.component';

export const routes = [
  { path: '', children: [
    { path: '', component: ProductsComponent },
    { path: ':id', loadChildren: './+product#ProductModule' }
  ]},
];
