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

  toastShow: boolean;
  toastClasses: string;
  currentUser;
  constructor(private authSvc: AuthService, private dbSvc: DatabaseService) {
    this.toastShow = false;
  }

  ngOnInit(): void {
  }

  toastCallBack() {
    this.toastShow = true;
    setTimeout(() => {
      this.toastShow = false;
    }, 3000);
  }

  async getUserRegister(user: User) {
    let cred = await this.authSvc.signUp(user).catch((err) => {
      this.toastClasses = "bg-warning text-light"
      this.toastCallBack();
    });
    if (cred) {
      user.id = cred.user.uid;
      await this.dbSvc.CreateOne(user, 'Users');
          let user_ok = await this.dbSvc.CreateOne(user, 'Admins');
          console.log(user_ok);
    }

    this.toastClasses = "bg-success text-light"
    this.toastCallBack();


  }
}
