import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { RechercheCollegueParNomComponent } from './recherche-collegue-par-nom/recherche-collegue-par-nom.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Routes , RouterModule} from '@angular/router';
import { ListerColleguesComponent } from './lister-collegues/lister-collegues.component';
import { DataService } from './services/data.service';
import {FormsModule} from '@angular/forms';
import { FormulaireCollegueComponent } from './collegue/formulaire-collegue/formulaire-collegue.component';
import { HttpClientModule } from '@angular/common/http';
import { GallerieComponent } from './gallerie/gallerie.component';
import { AproposComponent } from './apropos/apropos.component';
import { DetailCollegueComponent } from './collegue/detail-collegue/detail-collegue.component';

const appRoute: Routes = [
  {path: 'accueil', component: ListerColleguesComponent},
  {path: 'gallerie', component: GallerieComponent},
  {path: 'aPropos', component: AproposComponent},
  {path: 'detailCollegue/:id', component: DetailCollegueComponent},
  {path: 'listerCollegues', component: ListerColleguesComponent},
  {path: 'ajouterCollegue', component: FormulaireCollegueComponent},
  {path: '', pathMatch: 'full' , redirectTo: 'listerCollegues'}
];

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercheCollegueParNomComponent,
    HeaderComponent,
    FooterComponent,
    ListerColleguesComponent,
    FormulaireCollegueComponent,
    GallerieComponent,
    AproposComponent,
    DetailCollegueComponent
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
