import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct, DataService } from '../data/';
declare var $:any;
declare var Materialize:any;

@Component({
 selector: 'contact',
 templateUrl: 'contact.component.html'
})

export class ContactComponent implements OnInit {
 public products:IProduct[];
 
 constructor() {

 }

 public ngOnInit() {
	
 }

}
