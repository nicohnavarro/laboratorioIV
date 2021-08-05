import { Subject } from './../../data/model/subject';
import { DatabaseService } from './../../data/services/database.service';
import { Component, Input, OnInit, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-listado-de-asignaturas',
  templateUrl: './listado-de-asignaturas.component.html',
  styleUrls: ['./listado-de-asignaturas.component.css']
})
export class ListadoDeAsignaturasComponent implements OnInit {

  constructor(private db:DatabaseService) { }

  @Input() professorselected;
  materias:Subject[];
  @Output() materiaSelecionada: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
  }

  changeSubject(subject){
    this.materiaSelecionada.emit(subject);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.professorselected.subjects);
    this.materias = this.professorselected.subjects;
  }

}
