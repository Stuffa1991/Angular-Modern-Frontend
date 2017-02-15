import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  NgModule,
  ApplicationRef
} from '@angular/core';
import {
  removeNgStyles,
  createNewHosts,
  createInputTransfer
} from '@angularclass/hmr';
import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { NoContentComponent } from './no-content';
import { UpperNavComponent, NavigationComponent, FootComponent, NewsletterComponent, SliderComponent } from './common';
import { FrontPageComponent } from './frontpage';
import { ContactComponent } from './contact';
import { FavoriteProductComponent, LikeProductComponent, StarProductComponent } from './+products';

import '../styles/main.scss';
import "materialize-css";
import "angular2-materialize";
import { MaterializeDirective } from "angular2-materialize";

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    MaterializeDirective,
    NoContentComponent,
    FrontPageComponent,
    ContactComponent,
    UpperNavComponent,
    NavigationComponent,
    FootComponent,
    NewsletterComponent,
    FavoriteProductComponent,
    LikeProductComponent,
    StarProductComponent,
    SliderComponent
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  providers: [ // expose our Providers into Angular's dependency injection
    ENV_PROVIDERS
  ]
})
export class AppModule {

  constructor(
    public appRef: ApplicationRef,
  ) {}

}
