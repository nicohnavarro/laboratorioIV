import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'src/app/data/model/subject';

import { AuthService } from 'src/app/data/services/auth.service';
import { DatabaseService } from 'src/app/data/services/database.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {

  currentUser;
  toastShow: boolean;
  toastClasses: string;
  comment: string;
  constructor(private authSvc:AuthService,private dbSvc:DatabaseService, private router:Router,private toastr: ToastrService) {
    this.currentUser = authSvc.user;
   }
  
   showSuccess() {
     this.toastr.success('Hello world!', 'Toastr fun!');
   }

  ngOnInit(): void {
  }
  getSubject(subject:Subject){
    console.log(subject);
    subject.profesor.subjects ?
      subject.profesor.subjects.push(subject.name) :
      subject.profesor.subjects = [subject.name];

    this.dbSvc.CreateOne(subject,'Subjects').then(()=>{
      this.toastClasses = "bg-success text-light"
      this.comment = "Se agrego con exito";
      this.showSuccess();
    });
    this.dbSvc.UpdateOne(subject.profesor,'Users').then(()=>{
      this.toastClasses = "bg-success text-light"
      this.comment = "Se agrego Profe con exito";
      this.showSuccess();
    })
  }

}