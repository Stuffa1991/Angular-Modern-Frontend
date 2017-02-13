import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
 selector: 'star-rating',
 templateUrl: 'star-product.component.html'
})

export class StarProductComponent {
 @Output() public starClicked: EventEmitter<number> = new EventEmitter<number>();
 @Input() public stars:number;
 public highestRating = 5;
 public initialValue = 0;

 constructor() {}

 public range(value:number){ 
  let a = []; 
  for(let i = 0; i < this.highestRating; ++i) 
   { a.push(i+1) } 
  return a;
 }

 public onClick(stars:number){
  this.stars = stars;
  this.initialValue = stars;
  this.starClicked.emit(this.stars);
 }

 public onHover(stars:number, initial: number){
  this.initialValue = initial;
  this.stars = stars;
 }

 public onHoverEnd(){
  this.stars = this.initialValue;
 }
}
