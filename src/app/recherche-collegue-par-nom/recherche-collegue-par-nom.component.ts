import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  /* ajout demo */
  collegues: Collegue[];
  msgErreur: string;
  /* ajout demo */

  listeMatricules = [];

  rechercheEnCours: boolean = false;
  unObjetListeDeCollegues: Collegue[];

  constructor(private dataService: DataService) { }


  ngOnInit(): void {
  }


  rechercher(nomSaisi: string) {
    this.rechercheEnCours = true;
    this.dataService.rechercherParNom(nomSaisi)
      .subscribe(
        mats => this.listeMatricules = mats,
        err => {}
      );
  }

  masquer() {
    this.rechercheEnCours = false;
  }

  selectionnerCollegue(col: Collegue) {
    this.dataService.selCollegue(col);
  }
}
