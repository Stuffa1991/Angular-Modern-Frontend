import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
 selector: 'favorite',
 templateUrl: 'favorite-product.component.html'
})

export class FavoriteProductComponent {
 @Output() public favoriteClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
 @Input() public favorite:boolean;

 constructor() {}

 public onClick(){
  this.favoriteClicked.emit(!this.favorite);
 }
}
