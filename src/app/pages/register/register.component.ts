import { FileService } from './../../data/services/file.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/data/model/user';
import { AuthService } from 'src/app/data/services/auth.service';
import { DatabaseService } from 'src/app/data/services/database.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  comment: string;
  currentUser;
  file_uno: File;
  constructor(private authSvc: AuthService, private dbSvc: DatabaseService,private toastr:ToastrService,private fileSvc:FileService) {
  }

  ngOnInit(): void {}

    GetImgUno(img: File) {
    this.file_uno = img
  }

  async getUserRegister(user: User) {
    let cred = await this.authSvc.signUp(user).catch((err) => {
      this.comment = 'Error' + err.message;
      this.toastr.error(this.comment, 'Error!');
    });
    if (cred) {
      user.id = cred.user.uid;
      let task_1 = await this.fileSvc.UploadFile(this.file_uno, user.email);
      user.image = await task_1.ref.getDownloadURL();
      await this.dbSvc.CreateOne(user, 'Users');

    }

    this.comment = 'Account created';
    this.toastr.success(this.comment, 'Success!');
  }
}
