import { Collegue } from '../models/Collegue';
import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {
  @Input() col: Collegue;
  messageValidation: string = '';
  mode: string = 'creation';

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {

    this.dataService.abonnementCollegueEnCours()
    .subscribe(collegueSelect => this.col = collegueSelect)
  }

  valider() {
    this.mode = 'creation';
    this.messageValidation = 'Modifications enregistrees :-)';

    //Disparition du message de validation au bout de 2 secondes
    setTimeout(() => {
      this.messageValidation = '';
    }, 2000)
  }

  modifier() {
    this.mode = 'modification';
  }
 
}
