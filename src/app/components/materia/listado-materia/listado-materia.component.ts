import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'src/app/data/model/subject';
import { DatabaseService } from 'src/app/data/services/database.service';

@Component({
  selector: 'app-listado-materia',
  templateUrl: './listado-materia.component.html',
  styleUrls: ['./listado-materia.component.css']
})
export class ListadoMateriaComponent implements OnInit {

  @Input()subjects:Subject[];
  @Output() materiaElegida: EventEmitter<Subject> = new EventEmitter<Subject>();
  filter = new FormControl('');
  constructor(private dbSvc:DatabaseService) { 
    this.dbSvc.GetAll("Subjects").subscribe((data)=>{
      this.subjects = data;
    })
  }

  ngOnInit(): void {
  }

  seleccionoMateria(subject:Subject){
    this.materiaElegida.emit(subject);
  }

}
