import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms'
declare var $:any;
declare var Materialize:any;

class Newsletter {
	email: string;
}

@Component({
 selector: 'newsletter',
 templateUrl: 'newsletter.component.html'
})

export class NewsletterComponent implements OnInit {
 hasBeenSubmitted: boolean;
 model:Newsletter = new Newsletter();

 constructor() {}

 public ngOnInit() {
	this.hasBeenSubmitted = false;
 }

 public submit(form:NgForm, event:Event){
	this.hasBeenSubmitted = true;
	console.log(form.value);
	this.model.email= form.value.email;
	Materialize.toast('You are now subscribed to our newsletter! ' + this.model.email, 4000) // 4000 is the duration of the toast
 }
}
