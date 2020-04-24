import { Component, OnInit } from '@angular/core';
import {uneSuperListeDeCollegues} from '../mock/matricules.mock';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  unObjetListeDeCollegues = uneSuperListeDeCollegues;
  constructor() { }

  ngOnInit(): void {
  }

}
