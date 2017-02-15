import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms'
declare var $:any;
declare var Materialize:any;

class ContactMessage {
	name: string;
	email: string;
	message: string;
}

@Component({
 selector: 'contact',
 templateUrl: 'contact.component.html'
})

export class ContactComponent implements OnInit {
 hasBeenSubmitted: boolean;
 model:ContactMessage = new ContactMessage();

 constructor() {}

 public ngOnInit() {
	this.hasBeenSubmitted = false;
 }

 public submit(form:NgForm, event:Event){
	this.hasBeenSubmitted = true;
	this.model.name = form.value.name;
	this.model.email= form.value.email;
	this.model.message = form.value.message;
	Materialize.toast('Your message have been sent!', 4000) // 4000 is the duration of the toast
 }

}
