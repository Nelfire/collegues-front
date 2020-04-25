import { Collegue } from '../models/Collegue';

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {
  @Input() col: Collegue;
  messageValidation:string = '';
  mode:string = 'creation';

  constructor() {
  }

  ngOnInit(): void {
  }
  
  valider() {
    this.mode = 'creation';
    this.messageValidation = 'Modifications enregistrees :-)';
    
    //Disparition du message de validation au bout de 2 secondes
    setTimeout(() => {
      this.messageValidation = '';
    },2000)
  }

  modifier() {
    this.mode = 'modification';
  }

}
