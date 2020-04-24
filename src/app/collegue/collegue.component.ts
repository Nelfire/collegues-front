import { Collegue } from '../models/Collegue';

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {
  
  @Input() col: Collegue;
  @Input() message3: string;

  message = 'Bonjour';
  message2 = 'Test';

  constructor() {
  }

  ngOnInit(): void {
  }

  ajouter(){
    console.log("Ajouter collegue");
  }

  modifier(){
    console.log("Modifier collegue");
  }

  unSuperTest() {
    console.log("esjfjes");
  }

}
