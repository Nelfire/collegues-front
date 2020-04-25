import { Collegue } from '../models/Collegue';

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {
  
  @Input() col: Collegue;
  mode:string = 'creation';

  constructor() {
  }

  ngOnInit(): void {
  }
  
  ajouter() {
    this.mode = 'creation';
  }

  modifier() {
    this.mode = 'modification';
  }

}
