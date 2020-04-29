import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-lister-collegues',
  templateUrl: './lister-collegues.component.html',
  styleUrls: ['./lister-collegues.component.css']
})
export class ListerColleguesComponent implements OnInit {

  modeCreation = 'false';
  modeEdition = 'false';
  //modeCreation = 'false';
  constructor() { }

  ngOnInit(): void {
  }

}
