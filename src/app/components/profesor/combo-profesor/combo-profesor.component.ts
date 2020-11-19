import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Professor } from 'src/app/data/model/professor';
import { DatabaseService } from 'src/app/data/services/database.service';

@Component({
  selector: 'app-combo-profesor',
  templateUrl: './combo-profesor.component.html',
  styleUrls: ['./combo-profesor.component.css']
})
export class ComboProfesorComponent implements OnInit {

  @Input() listaProfesores:Professor[];
  profesor:Professor;
  @Output() selectedProfessor:EventEmitter<Professor> = new EventEmitter<Professor>();
  constructor() { 
  }

  setProfessor(profesor:Professor){
    this.profesor = profesor;
    this.selectedProfessor.emit(profesor);
  }

  ngOnInit(): void {
  }

}
