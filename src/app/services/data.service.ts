import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private subCollegueEnCours = new Subject<Collegue>();
  URL_BACKEND = environment.backendUrl;

  constructor(private http: HttpClient) { }

  abonnementCollegueEnCours(): Observable<Collegue> {
    return this.subCollegueEnCours.asObservable();
  }


  rechercherParNom(nomRecherche: string): Observable<string[]> {
    return this.http.get<string[]>(`https://digicapi.herokuapp.com/collegues?nom=${nomRecherche}`);
  }


    recupererCollegueCourant(matriculeCollegue: string) {
    this.http.get<Collegue>(`https://digicapi.herokuapp.com/collegues/${matriculeCollegue}`).subscribe(collegue => {
      this.subCollegueEnCours.next(collegue);
    });
  }

}