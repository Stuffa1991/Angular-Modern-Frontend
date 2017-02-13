import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct, DataService } from '../data/';

@Component({
 selector: 'frontpage',
 templateUrl: 'frontpage.component.html'
})

export class FrontPageComponent implements OnInit {
 public products:IProduct[];
 
 constructor(private _dataService:DataService) {

 }

 public ngOnInit() {
	this.products = this._dataService.getProductData();
 }

 public onLikeClicked(event: any, product: IProduct):void {
 	product.isLiked = event;
 }

 public onFavoriteClicked(event: any, product: IProduct):void  {
 	product.isFavorited = event;
 }

 public onRatingClicked(event: any, product: IProduct):void  {
 	product.rating = event;
 }
}
