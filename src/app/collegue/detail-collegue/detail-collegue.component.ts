import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Collegue } from 'src/app/models/Collegue';

@Component({
  selector: 'app-detail-collegue',
  templateUrl: './detail-collegue.component.html',
  styleUrls: ['./detail-collegue.component.css']
})
export class DetailCollegueComponent implements OnInit {

  collegueRecupere: Collegue;
  message: string;
  constructor(private route: ActivatedRoute,
    private dataService: DataService) { }

  ngOnInit(): void {



    const id = this.route.snapshot.params['id'];

    this.message = id;

  }

}
