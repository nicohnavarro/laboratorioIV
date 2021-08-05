import { FileService } from './../../data/services/file.service';
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
  file_uno: File;

  constructor(private authSvc:AuthService,private dbSvc:DatabaseService,private fileSvc:FileService, private router:Router,private toastr: ToastrService) {
    this.currentUser = authSvc.user;
   }
  
   showSuccess() {
     this.toastr.success('Hello world!', 'Toastr fun!');
   }

  ngOnInit(): void {
  }

  GetImgUno(img: File) {
    this.file_uno = img
  }

  async getSubject(subject:Subject){
    let task_1 = await this.fileSvc.UploadFile(this.file_uno, subject.name);
    subject.image = await task_1.ref.getDownloadURL();

    subject.profesor.subjects ?
      subject.profesor.subjects.push(subject.name) :
      subject.profesor.subjects = [subject.name];

    this.dbSvc.CreateOne(subject,'Subjects').then(()=>{
    });
    this.dbSvc.UpdateOne(subject.profesor,'Users').then(()=>{
      this.showSuccess();
    })
  }

}