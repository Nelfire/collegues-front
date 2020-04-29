import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent implements OnInit {

  messageErreur: string;
  listeCollegues: Collegue[];
  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.dataService.recupererListeCollegue().subscribe(
      (collegues) => {
        this.listeCollegues = collegues;
      }, (error) => {
        this.messageErreur = error;
        console.log('Erreur');
      }
    )
  }

}
