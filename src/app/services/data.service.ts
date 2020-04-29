import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Le subject est privé, on le rend "public" avec "abonnementCollegueEnCours()"
  private subCollegueEnCours = new Subject<Collegue>();

  constructor(private http: HttpClient) { }

  // Observable auquel on pourra souscricre dans collegue.component
  // asObservable pour qu'on ne puisse faire que des abonnements depuis les component,
  // et non des .next
  abonnementCollegueEnCours(): Observable<Collegue> {
    return this.subCollegueEnCours.asObservable();
  }

  // On met en place un observable qui retourne la liste des matricules correspondant.
  // Observable auquel on pourra souscrire par la suite, pas un .subscribe
  rechercherParNom(nomRecherche: string): Observable<string[]> {
    return this.http.get<string[]>(`https://digicapi.herokuapp.com/collegues?nom=${nomRecherche}`);
  }


  // On met en place un obserable auquel on souscris, pour retourner
  // les informations du collaborateur, en fonction de son matricule
  recupererCollegueCourant(matriculeCollegue: string) {
    this.http.get<Collegue>(`https://digicapi.herokuapp.com/collegues/${matriculeCollegue}`).subscribe(
      (collegue) => {
        this.subCollegueEnCours.next(collegue);
      });
  }


  ajouterCollegue(nom: string, prenoms: string, email: string, dateDeNaissance: Date, photoUrl: string): Observable<Collegue> {
    return this.http.post<Collegue>(`https://digicapi.herokuapp.com/collegues/`,
      {
        nom: `${nom}`,
        prenoms: `${prenoms}`,
        email: `${email}`,
        dateDeNaissance: `${dateDeNaissance}`,
        photoUrl: `${photoUrl}`
      });
  }
}