import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { unSuperCollegue } from '../mock/collegues.mock';
import { uneSuperListeDeCollegues } from '../mock/matricules.mock';
import { HttpClient } from '@angular/common/http';
import { Observable, interval, Subject } from 'rxjs';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private subCollegueEnCours = new Subject<Collegue>();
  URL_BACKEND = environment.backendUrl;


  constructor(private http: HttpClient) { }

  // lister(): Observable<Collegue[]> {

  //   return this.http.get<Collegue[]>(this.URL_BACKEND);

  // }

  abonnementCollegueEnCours(): Observable<Collegue> {
    return this.subCollegueEnCours.asObservable();
  }

  selCollegue(col: Collegue) {
    //console.log(col);
    this.subCollegueEnCours.next(col);
  }

  rechercherParNom(nomRecherche: string): Observable<String[]> {
    return this.http.get<String[]>(`https://digicapi.herokuapp.com/collegues?nom=${nomRecherche}`);
    // return this.http.get<string[]>(this.URL_BACKEND);
  }
  
  recupererCollegueCourant(): Collegue {
    return unSuperCollegue;
  }
}