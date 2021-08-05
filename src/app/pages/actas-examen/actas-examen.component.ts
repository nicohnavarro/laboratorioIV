import { Subject } from './../../data/model/subject';
import { AuthService } from './../../data/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actas-examen',
  templateUrl: './actas-examen.component.html',
  styleUrls: ['./actas-examen.component.css']
})
export class ActasExamenComponent implements OnInit {

  profe:any
  materiaSelected:Subject;
  constructor(private authSvc:AuthService) {
  }
  ngOnInit(): void {
    console.log(this.authSvc.user);
    this.profe = this.authSvc.user;
  }

  getMateria(subject){
    this.materiaSelected = subject;
  }

}
