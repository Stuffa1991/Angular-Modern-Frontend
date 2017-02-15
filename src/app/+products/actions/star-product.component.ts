import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
 selector: 'star-rating',
 templateUrl: 'star-product.component.html'
})

export class StarProductComponent implements OnInit {
 @Output() public starClicked: EventEmitter<number> = new EventEmitter<number>();
 @Input() public stars:number;
 public highestRating:number = 5;
 public initialValue:number;

 constructor() {}

 public ngOnInit () {
   this.initialValue = this.stars;
 }

 public range(value:number){
  let a = []; 
  for(let i = 0; i < this.highestRating; ++i) 
   { a.push(i+1) } 
  return a;
 }

 public onClick(stars:number){
  this.initialValue = stars;
  this.stars = stars;
  this.starClicked.emit(this.stars);
 }

 public onHover(hoverStar:number){
  this.stars = hoverStar;
 }

 public onHoverEnd(initial:number){
  this.stars = initial;
 }
}
