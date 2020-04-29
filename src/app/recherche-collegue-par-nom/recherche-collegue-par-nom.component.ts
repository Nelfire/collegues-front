import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Collegue } from '../models/Collegue';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  collegues: Collegue[];

  // Message d'erreur affiché en cas d'erreur subscription
  msgErreur: string;

  // Liste de matricules qu'on va remplir avec la subscription
  listeMatricules = [];

  // Boolean de recherche pour afficher ou non le menu
  rechercheEnCours = false;
  unObjetListeDeCollegues: Collegue[];

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  // On souscris à l'observable "rechercherParNom" et on peuple l'array local "listeMatricules" des données récupérées
  rechercher(nomSaisi: string) {
    this.rechercheEnCours = true;
    this.dataService.rechercherParNom(nomSaisi)
      .subscribe(
        // Cas 1 (Valeur de retour)
        (lesMatriculesDeLObservable) => {
          this.listeMatricules = lesMatriculesDeLObservable;
          if(this.listeMatricules.length === 0) {
            this.msgErreur = `Erreur matricule renseigne "${nomSaisi}"`;
          } else {
            this.msgErreur = '';
          }
        }, // Cas 2 (Cas erreur)
        (err: HttpErrorResponse) => {
          this.msgErreur = 'Erreur : ' + err;
        }, // Cas 3 (Ok)
        () => {
          console.log('Tout est ok ! ');
        }
      );
  }

  // Bouton masquer, pour cacher la liste des matricules
  masquer() {
    this.rechercheEnCours = false;
  }

  // Quand l'on clique sur un matricule, pour peupler le menu collegue de droite
  // Appel à l'observable "recupererCollegueCourant"
  recupererCollegue(matricule: string) {
    this.dataService.recupererCollegueCourant(matricule);
    this.router.navigate([`detailCollegue/${matricule}`]);
  }

}
