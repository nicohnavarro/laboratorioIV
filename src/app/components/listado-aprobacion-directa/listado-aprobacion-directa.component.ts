import { DatabaseService } from './../../data/services/database.service';
import { Exam } from './../../data/model/exam';
import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-listado-aprobacion-directa',
  templateUrl: './listado-aprobacion-directa.component.html',
  styleUrls: ['./listado-aprobacion-directa.component.css']
})
export class ListadoAprobacionDirectaComponent implements OnInit {

  @Input() materia;
  exams: Exam[];
  constructor(private db:DatabaseService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.db.GetAll('Exams').subscribe((data)=>{
      this.exams = data.filter((exam)=> this.materia === exam.subject.name ? true: false)
        .filter((exam)=> exam.nota >= 7 ? true:false);
    })
  }

}
