import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Collegue } from '../models/Collegue';
@Component({
  selector: 'app-lister-collegues',
  templateUrl: './lister-collegues.component.html',
  styleUrls: ['./lister-collegues.component.css']
})
export class ListerColleguesComponent implements OnInit {

  unObjetCollegueFourni: Collegue;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.unObjetCollegueFourni = this.dataService.recupererCollegueCourant();
  }

}
