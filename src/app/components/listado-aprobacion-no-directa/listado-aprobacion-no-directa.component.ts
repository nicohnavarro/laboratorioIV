import { DatabaseService } from './../../data/services/database.service';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Exam } from 'src/app/data/model/exam';

@Component({
  selector: 'app-listado-aprobacion-no-directa',
  templateUrl: './listado-aprobacion-no-directa.component.html',
  styleUrls: ['./listado-aprobacion-no-directa.component.css']
})
export class ListadoAprobacionNoDirectaComponent implements OnInit {

  @Input() materia;
  exams: Exam[];
  constructor(private db:DatabaseService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.db.GetAll('Exams').subscribe((data)=>{
      this.exams = data.filter((exam)=> this.materia === exam.subject.name ? true: false)
        .filter((exam)=> exam.nota >= 7 ? false:true);
    })
  }
}
