import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/data/model/subject';
import { AuthService } from 'src/app/data/services/auth.service';
import { DatabaseService } from 'src/app/data/services/database.service';

@Component({
  selector: 'app-my-subjects',
  templateUrl: './my-subjects.component.html',
  styleUrls: ['./my-subjects.component.css']
})
export class MySubjectsComponent implements OnInit {

  listaMaterias: Subject[];
  subjectselect: Subject;
  constructor(private authSvc: AuthService, private db: DatabaseService) {
    this.db.GetAll("Subjects").subscribe((data) => {
      let materias = data.filter((materia) => {
      if (authSvc.user.type === 'Student') {
          let include = JSON.stringify(materia.students).includes(authSvc.user.email);
          return include ? true : false;
        }
        if (authSvc.user.type === 'Admin') {
          return true;
        }
        else {
          let include = materia.profesor.email === authSvc.user.email;
          return include ? true : false;
        }
      });
    this.listaMaterias = materias;
    })
  }
  getSubject(subject) {
    this.subjectselect = subject;
  }

  ngOnInit(): void {
  }

}
