import { DatabaseService } from './../../../data/services/database.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-alumno',
  templateUrl: './listado-alumno.component.html',
  styleUrls: ['./listado-alumno.component.css']
})
export class ListadoAlumnoComponent implements OnInit {

  usuarios: any[];
  constructor(private dbSvc: DatabaseService) {
    this.dbSvc.GetAll('Deletes').subscribe((data) => {
      this.usuarios = data.map((aux)=> {
        console.log(aux.date);
        return {...aux,date:new Date(aux.date.seconds * 1000).toLocaleDateString()}
    });
  })
}

  ngOnInit(): void {
  }

}
