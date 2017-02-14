import {
  Component,
  OnInit,
} from '@angular/core';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

@Component({
  selector: 'product',
  template: `
    <h1>Hello from Products</h1>
    <span>
      <a [routerLink]=" ['./child-product'] ">
        Child Product
      </a>
    </span>
    <router-outlet></router-outlet>
  `,
})
export class ProductsComponent implements OnInit {

  public ngOnInit() {
    console.log('hello `Product` component');
  }

}
