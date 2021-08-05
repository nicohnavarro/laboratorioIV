import { DatabaseService } from './../../data/services/database.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent implements OnInit {

  exams: any[];
  constructor(private dbSvc: DatabaseService) {
    this.dbSvc.GetAll('Exams').subscribe((data) => {
      this.exams = data.map((aux)=> {
        console.log(aux.date);
        return {...aux,date:new Date(aux.date.seconds * 1000).toLocaleDateString()}
    });
  })
}
  ngOnInit(): void {
  }

}
