import { Component, OnInit, AfterViewInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

@Component({
  selector: 'product',
  templateUrl: 'product.component.html',
})
export class ProductComponent implements OnInit {
  id: number;
  private sub: any;

  constructor(private route: ActivatedRoute) {}

  public ngAfterViewInit() {
   $('select').material_select();
   $('ul.tabs').tabs();
  }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       // In a real app: dispatch action to load the details here.
    });
  }

}
