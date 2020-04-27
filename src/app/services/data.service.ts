import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { unSuperCollegue } from '../mock/collegues.mock';
import { uneSuperListeDeCollegues } from '../mock/matricules.mock';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  rechercherParNom(nomRecherche: string): Collegue[] {
    // const listeMatricules: Collegue[] = [];
    // uneSuperListeDeCollegues.forEach(collegue => {
    //   if (collegue.nom === nomRecherche) {
    //     listeMatricules.push(collegue);
    //   }
    // });
    // return listeMatricules;
    return uneSuperListeDeCollegues;
  }
  recupererCollegueCourant(): Collegue {
    return unSuperCollegue;
  }
}