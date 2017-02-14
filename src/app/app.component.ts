/*
 * Angular 2 decorators and services
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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

  constructor(private router: Router) {}

  public ngOnInit() {
    //Fix to scroll to top everytime we change route
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      document.body.scrollTop = 0;
    });
  }

}