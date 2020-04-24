import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { RechercheCollegueParNomComponent } from './recherche-collegue-par-nom/recherche-collegue-par-nom.component';
import {RouterModule, Routes} from "@angular/router";
import { ModifierCollegueComponent } from './modifier-collegue/modifier-collegue.component';
import { ListerCollegueComponent } from './lister-collegue/lister-collegue.component';

const appRoute: Routes
@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercheCollegueParNomComponent,
    ModifierCollegueComponent,
    ListerCollegueComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute);
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
