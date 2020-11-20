import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  constructor(private authSvc: AuthService, private db: DatabaseService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  tomaMateria(subject: Subject, content) {
    this.subject = subject;
    this.openVerticallyCentered(content)
  }

  openVerticallyCentered(content) {
    if (this.subject.quotas > 0 && !this.verificarSiTieneClase()) {
      this.modalService.open(content, { centered: true });
    }
    else{
      alert("ya estas anotado!");
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
    this.subject.quotas = this.subject.quotas - 1;
    this.db.UpdateOne(this.subject, "Subjects").then(() => {
      alert("se agrego");
      this.db.GetAll("Subjects").subscribe((data)=>{
        this.listaMaterias = data;
      })
    });
  }

}
