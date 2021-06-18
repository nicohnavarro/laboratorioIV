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
  @Input() subjects: Subject[];
  @Output() materiaElegida: EventEmitter<Subject> = new EventEmitter<Subject>();
  filter = new FormControl('');
  constructor(private dbSvc: DatabaseService) {
    this.dbSvc.GetAll('Subjects').subscribe((data) => {
      this.subjects = data;
    });
  }
  toastShow: boolean;
  toastClasses: string;
  comment: string;

  toastCallBack() {
    this.toastShow = true;
    setTimeout(() => {
      this.toastShow = false;
    }, 3000);
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
      this.comment = 'nota normal !';
      this.toastClasses = "bg-danger text-light";
      this.toastCallBack();
      return
    }
    this.alunmnoEval.nota = this.nota;
    this.evaluado = false;
    let examen = {
      'subject':this.materiaselec,
      'student':this.alunmnoEval,
      'nota':this.nota,
      'date':new Date(),
    } 

    this.dbSvc.CreateOne(examen as Exam,'Exams').then(()=>{
      this.comment = 'Nota cargada !';
      this.toastClasses = "bg-success text-light";
      this.toastCallBack();
    })
  }
}
