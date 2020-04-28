import { Collegue } from '../models/Collegue';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit, OnDestroy {
  col: Collegue;
  messageValidation = '';
  mode = 'creation';
  afficheComponent = false;

  // Cr�ation d'une Subscription pour pouvoir la d�truire � la fin
  collegueSubscription: Subscription;

  constructor(private dataService: DataService) {
  }

  // On souscris � l'observable "abonnementCollegueEnCours" et on peuple la variable locale "col" des donn�es r�cup�r�es
  ngOnInit(): void {
    this.collegueSubscription = this.dataService.abonnementCollegueEnCours()
      .subscribe(collegueSelect => {
        this.col = collegueSelect
      })
  }

  // Bouton "valider" changement formulaire (inutile pour le moment)
  valider() {
    this.mode = 'creation';
    this.messageValidation = 'Modifications enregistrees :-)';

    // Disparition du message de validation au bout de 2 secondes
    setTimeout(() => {
      this.messageValidation = '';
    }, 2000)
  }

  // Bouton "modifier" changement formulaire (inutile pour le moment)
  modifier() {
    this.mode = 'modification';
  }

  // Destruction de la subscription
  ngOnDestroy() {
    this.collegueSubscription.unsubscribe();
  }

}
