import { DatabaseService } from './../../data/services/database.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listado-de-asignaturas',
  templateUrl: './listado-de-asignaturas.component.html',
  styleUrls: ['./listado-de-asignaturas.component.css']
})
export class ListadoDeAsignaturasComponent implements OnInit {

  constructor(private db:DatabaseService) { }

  @Input() professorselected;
  @Output() materiaSelecionada: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {

    
  }

  changeSubject(subject){
    this.materiaSelecionada.emit(subject);
  }

}
