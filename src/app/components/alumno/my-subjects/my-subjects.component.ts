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

  listaMaterias:Subject[];
  constructor(private atuhSvc:AuthService,private db:DatabaseService) { 
    this.db.GetAll("Subjects").subscribe((data)=>{
      let materias = data.map((materia:Subject)=> {
        let alumnos = materia.students.map((alumno)=> {return alumno.email})
        if(alumnos.includes(this.atuhSvc.user))
          return materia;
      })
      this.listaMaterias= materias;
    })
  }

  ngOnInit(): void {
  }

}
