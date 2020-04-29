import { Component, OnInit } from '@angular/core';
import { Collegue } from 'src/app/models/Collegue';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-formulaire-collegue',
  templateUrl: './formulaire-collegue.component.html',
  styleUrls: ['./formulaire-collegue.component.css']
})
export class FormulaireCollegueComponent implements OnInit {

  element: HTMLElement;
  collegueSaisie: Collegue = new Collegue('', '', '', '', new Date(), '');
  message: string;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  getEtat() {
    return 'ng-pristine';
  }
  valider() {
    console.log('saisie', this.collegueSaisie);
    this.message = 'Formulaire envoye !'

    // Disparition du message de validation au bout de 2 secondes
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

    this.dataService.ajouterCollegue(nom, prenom, email, dateDeNaissance, photoUrl).subscribe();



  }
}
