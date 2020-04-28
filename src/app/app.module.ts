import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { RechercheCollegueParNomComponent } from './recherche-collegue-par-nom/recherche-collegue-par-nom.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {Routes,RouterModule} from '@angular/router';
import { ListerColleguesComponent } from './lister-collegues/lister-collegues.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { FormulaireCollegueComponent } from './collegue/formulaire-collegue/formulaire-collegue.component';

const appRoute: Routes = [
  {path: 'listerCollegues', component: ListerColleguesComponent},
  {path: '', component: ListerColleguesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercheCollegueParNomComponent,
    HeaderComponent,
    FooterComponent,
    ListerColleguesComponent,
    FormulaireCollegueComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
