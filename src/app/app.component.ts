import { Component } from '@angular/core';
//import {collegues_mock} from './mock/collegues.mock';
import {unSuperCollegue} from './mock/collegues.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'collegues-front';

  // collegue = new collegues_mock();
  // unObjetCollegueFourni = {
  //   matricule: this.collegue.col.matricule,
  //   nom: this.collegue.col.nom,
  //   prenom: this.collegue.col.prenom,
  //   email: this.collegue.col.email,
  //   dateDeNaissance: this.collegue.col.dateDeNaissance,
  //   photoUrl: this.collegue.col.photoUrl,
  // }

  unObjetCollegueFourni = unSuperCollegue;
}