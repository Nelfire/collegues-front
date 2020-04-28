import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../services/data.service';
import { Collegue } from '../models/Collegue';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit, OnDestroy {

  collegues: Collegue[];

  //Message d'erreur affiché en cas d'erreur subscription
  msgErreur: string;

  //Liste de matricules qu'on va remplir avec la subscription
  listeMatricules = [];

  // Boolean de recherche pour afficher ou non le menu
  rechercheEnCours: boolean = false;
  unObjetListeDeCollegues: Collegue[];

  //Création d'une Subscription pour pouvoir la détruire à la fin
  listeMatriculesSubscription: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  // On souscris à l'observable "rechercherParNom" et on peuple l'array local "listeMatricules" des données récupérées
  rechercher(nomSaisi: string) {
    this.rechercheEnCours = true;
    this.listeMatriculesSubscription = this.dataService.rechercherParNom(nomSaisi)
      .subscribe(
        (lesMatriculesDeLObservable) => {
          this.listeMatricules = lesMatriculesDeLObservable;
        }, (err) => {
          this.msgErreur = 'Erreur : ' + err;
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
  }

  //Destruction de la subscription
  ngOnDestroy() {
    this.listeMatriculesSubscription.unsubscribe();
  }
}
