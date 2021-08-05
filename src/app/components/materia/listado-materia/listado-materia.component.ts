import { ToastrService } from 'ngx-toastr';
import { Exam } from './../../../data/model/exam';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'src/app/data/model/subject';
import { DatabaseService } from 'src/app/data/services/database.service';

@Component({
  selector: 'app-listado-materia',
  templateUrl: './listado-materia.component.html',
  styleUrls: ['./listado-materia.component.css'],
})
export class ListadoMateriaComponent implements OnInit {
  alumnos: any[] = [];
  alumno:any;
  puedeCargarNota:boolean = false;
  @Input() subjects: Subject[];
  @Output() materiaElegida: EventEmitter<Subject> = new EventEmitter<Subject>();
  filter = new FormControl('');
  constructor(private dbSvc: DatabaseService,private toastr:ToastrService) {
    
  }

  ngOnInit(): void {}
  materiaselec;
  seleccionoMateria(subject: Subject) {
    this.materiaElegida.emit(subject);
    this.materiaselec = subject;
    this.alumnos = subject.students.filter((alumno) => alumno.isActive);
  }

  evaluado: boolean = false;
  alunmnoEval;
  ponerNota(alumno) {
    this.alunmnoEval = alumno;
    this.evaluado = true;

  }
  nota = 1;
  addNota() {
    console.log(this.nota);
    if(this.nota <1 || this.nota >10 )
    {
      this.toastr.error('La nota debe ser entre 0 y 10')
    }
    this.alumno.nota = this.nota;
    this.evaluado = false;
    let examen = {
      'subject':this.materiaselec,
      'student':this.alumno,
      'nota':this.nota,
      'date':new Date(),
    } 
    this.puedeCargarNota = false;
    this.dbSvc.CreateOne(examen as Exam,'Exams').then(()=>{
      this.toastr.success('Nota cargada')
    })
  }

  getExam(student){
    this.alumno = student;
    this.puedeCargarNota = true;
  }

  getAlumno(alumno) {
    this.alumno = alumno;
  }
}
