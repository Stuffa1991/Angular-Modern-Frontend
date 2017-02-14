import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
 selector: 'like',
 templateUrl: 'like-product.component.html'
})

export class LikeProductComponent {
 @Output() public likeClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
 @Input() public like:boolean;

 constructor() {}

 public onClick(){
  this.likeClicked.emit(!this.like);
 }
}
