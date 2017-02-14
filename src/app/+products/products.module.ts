import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './products.routes';
import { ProductsComponent } from './products.component';

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class ProductsModule {
  public static routes = routes;
}
