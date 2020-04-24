import { Component } from '@angular/core';
import {unSuperCollegue} from './mock/collegues.mock';
import {uneSuperListeDeCollegues} from './mock/matricules.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  unObjetCollegueFourni = unSuperCollegue;
  unObjetListeDeCollegues = uneSuperListeDeCollegues;
}