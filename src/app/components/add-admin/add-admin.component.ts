import { FileService } from './../../data/services/file.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/data/model/user';
import { AuthService } from 'src/app/data/services/auth.service';
import { DatabaseService } from 'src/app/data/services/database.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  currentUser;
  file_uno: File;

  constructor(private authSvc: AuthService, private dbSvc: DatabaseService,private fileSvc:FileService) {
  }

  ngOnInit(): void {
  }

  GetImgUno(img: File) {
    this.file_uno = img
    console.log(img);
  }

  async getUserRegister(user: User) {
    let cred = await this.authSvc.signUp(user).catch((err) => {

    });
    if (cred) {
      user.id = cred.user.uid;
      let task_1 = await this.fileSvc.UploadFile(this.file_uno, user.email);
      user.image = await task_1.ref.getDownloadURL();
      await this.dbSvc.CreateOne(user, 'Users');
          let user_ok = await this.dbSvc.CreateOne(user, 'Admins');
    }


  }
}
