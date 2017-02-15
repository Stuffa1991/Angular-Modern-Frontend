import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct, DataService } from '../data/';
declare var $:any;
declare var Materialize:any;

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
 	if(!product.isLiked){
 		Materialize.toast('Awesome you liked a product', 4000) // 4000 is the duration of the toast
 	} else {
 		Materialize.toast('Like was removed from this product', 4000) // 4000 is the duration of the toast
 	}
 }

 public onFavoriteClicked(event: any, product: IProduct):void  {
 	product.isFavorited = event;

 	if(!product.isFavorited){
 		Materialize.toast('Awesome you added this product to your favorites', 4000) // 4000 is the duration of the toast
 	} else {
 		Materialize.toast('Product removed from favorites', 4000) // 4000 is the duration of the toast
 	}
 	
 }

 public onRatingClicked(event: any, product: IProduct):void  {
 	product.rating = event;

 	Materialize.toast(`You gave this product a ${product.rating} star rating`, 4000) // 4000 is the duration of the toast
 }
}
