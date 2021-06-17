import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Student } from 'src/app/data/model/student';
import { Subject } from 'src/app/data/model/subject';
import { AuthService } from 'src/app/data/services/auth.service';
import { DatabaseService } from 'src/app/data/services/database.service';

@Component({
  selector: 'app-agregar-materia',
  templateUrl: './agregar-materia.component.html',
  styleUrls: ['./agregar-materia.component.css']
})
export class AgregarMateriaComponent implements OnInit {
  subject: Subject;
  listaMaterias:Subject[];
  toastShow: boolean;
  toastClasses: string;
  comment: string;

  constructor(private authSvc: AuthService, private db: DatabaseService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  tomaMateria(subject: Subject, content) {
    this.subject = subject;
    this.openVerticallyCentered(content)
  }

  
  toastCallBack() {
    this.toastShow = true;
    setTimeout(() => {
      this.toastShow = false;
    }, 3000);
  }


  openVerticallyCentered(content) {
    if (this.subject.quotas > 0 && !this.verificarSiTieneClase()) {
      this.modalService.open(content, { centered: true });
    }
    else{
          this.toastClasses = "bg-warning text-dark";
    this.comment = 'Ya esta registrado';
    this.toastCallBack();
    }
  }

  verificarSiTieneClase() {
    let emailsAlumnos = this.subject.students.map(student => { return student.email })
    if (emailsAlumnos.includes(this.authSvc.user.email))
      return true;
    else
      return false;
  }

  concluirInscripcion() {
    this.modalService.dismissAll();
    this.subject.students.push(this.authSvc.user);
    console.log(this.authSvc.user?.subjects == undefined);
    let student = this.authSvc.user;
    if(student?.subjects == undefined){
      student = {...student,'subjects':[]} 
    }
    student.subjects.push(this.subject.name);
    this.subject.quotas = this.subject.quotas - 1;
    this.db.UpdateOne(this.subject, "Subjects").then(() => {
      this.db.GetAll("Subjects").subscribe((data)=>{
        this.listaMaterias = data;
      })
    });
    this.db.UpdateOne(student,'Students').then(()=>{
      this.toastClasses = "bg-success text-light";
      this.comment = 'Register confirmed';
      this.toastCallBack();
    })
  }

}
