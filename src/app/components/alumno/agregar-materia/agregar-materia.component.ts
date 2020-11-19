import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'src/app/data/model/subject';
import { AuthService } from 'src/app/data/services/auth.service';

@Component({
  selector: 'app-agregar-materia',
  templateUrl: './agregar-materia.component.html',
  styleUrls: ['./agregar-materia.component.css']
})
export class AgregarMateriaComponent implements OnInit {

  constructor(private authSvc:AuthService,private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  tomaMateria(subject:Subject,content){

    this.openVerticallyCentered(content)
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

}
