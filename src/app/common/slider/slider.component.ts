import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var $:any;
declare var Materialize:any;

@Component({
 selector: 'slider',
 templateUrl: 'slider.component.html'
})

export class SliderComponent implements OnInit {
 constructor() {}

 public ngAfterViewInit() {
 	$('.slider').slider({height: 650});
 }

 public ngOnInit() {
	
 }
}
