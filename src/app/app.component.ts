/*
 * Angular 2 decorators and services
 */
import { Component, OnInit, ViewEncapsulation, AfterViewInit  } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {

  constructor(private _router: Router) {}

  public ngAfterViewInit() {
     $(".dropdown-button").dropdown();
     $(".button-collapse").sideNav({
       closeOnClick: true,
       edge: 'right',
       draggable: true
     });
   }

  public ngOnInit() {
    //Fix to scroll to top everytime we change route
    this._router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
  }

}