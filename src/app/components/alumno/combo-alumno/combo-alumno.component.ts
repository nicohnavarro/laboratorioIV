import { Student } from './../../../data/model/student';
import { Component, OnInit, Output, Input, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-combo-alumno',
  templateUrl: './combo-alumno.component.html',
  styleUrls: ['./combo-alumno.component.css']
})
export class ComboAlumnoComponent implements OnInit {

  @Input() listaAlumnos:Student[];
  alumno:Student;
  @Output() selectedAlumno:EventEmitter<Student> = new EventEmitter<Student>();
  @Output() exam:EventEmitter<any> = new EventEmitter<any>();
  constructor() { 
  }

  setAlumno(alumno:Student){
    this.alumno = alumno;
    this.selectedAlumno.emit(alumno);
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.alumno=null;
  }

  doExam(student){
    this.exam.emit(student);
  }


}
