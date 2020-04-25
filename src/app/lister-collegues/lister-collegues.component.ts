import { Component, OnInit } from '@angular/core';
import {unSuperCollegue} from '../mock/collegues.mock';
import {uneSuperListeDeCollegues} from '../mock/matricules.mock';
@Component({
  selector: 'app-lister-collegues',
  templateUrl: './lister-collegues.component.html',
  styleUrls: ['./lister-collegues.component.css']
})
export class ListerColleguesComponent implements OnInit {

  unObjetCollegueFourni = unSuperCollegue;
  unObjetListeDeCollegues = uneSuperListeDeCollegues;

  constructor() { }

  ngOnInit(): void {
  }

}
