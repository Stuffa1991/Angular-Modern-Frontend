import { Component, OnInit, AfterViewInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { IProduct, DataService } from '../../data/';

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
  private id: number;
  private saving: number;
  private sub: any;
  private product: IProduct;
  private activePhoto: number;

  constructor(private _route: ActivatedRoute, private _dataService:DataService) {}

  public ngAfterViewInit() {
   $('select').material_select();
   $('ul.tabs').tabs();
   $('.materialboxed').materialbox();
  }

  public ngOnInit() {
    this.sub = this._route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       // In a real app: dispatch action to load the details here.

       this.product = this._dataService.getProductDataById(this.id);
       
       this.activePhoto = 0;
    });
  }

  public changePhoto(active:number){
    this.activePhoto = active;
    $('.materialboxed').materialbox();
  }
}
