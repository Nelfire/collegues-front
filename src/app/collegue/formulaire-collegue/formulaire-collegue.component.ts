import { Component, OnInit, Output } from '@angular/core';
import { Collegue } from 'src/app/models/Collegue';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-formulaire-collegue',
  templateUrl: './formulaire-collegue.component.html',
  styleUrls: ['./formulaire-collegue.component.css']
})
export class FormulaireCollegueComponent implements OnInit {

  //pour transmettre une donnée à un autre component
  //@Output() outPutValider = new EventEmitter<>();

  element: HTMLElement;
  collegueSaisie: Collegue = new Collegue('', '', '', '', new Date(), '');
  message: string;
  ajouterCollegueSubscription: Subscription;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  valider() {
    console.log('saisie', this.collegueSaisie);
    this.message = 'Formulaire envoye !'

    // Disparition du message de validation au bout de 2 secondes
    // On vide aussi les champs
    setTimeout(() => {
      this.message = '';
      this.collegueSaisie.nom = '';
      this.collegueSaisie.prenoms = '';
      this.collegueSaisie.email = '';
      this.collegueSaisie.dateDeNaissance = null;
      this.collegueSaisie.photoUrl = '';
    }, 2000)

    const nom: string = this.collegueSaisie.nom;
    const prenom: string = this.collegueSaisie.prenoms;
    const dateDeNaissance: Date = this.collegueSaisie.dateDeNaissance;
    const email: string = this.collegueSaisie.email;
    const photoUrl: string = this.collegueSaisie.photoUrl;

    this.ajouterCollegueSubscription = this.dataService.ajouterCollegue(nom, prenom, email, dateDeNaissance, photoUrl).subscribe(
      () => {
        //pour transmettre une donnée à un autre component
        //this.outPutValider.emit(); // emission de l'evenement "valider" (ok)
      }
    );
  }
}
