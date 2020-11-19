import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/data/model/user';
import { AuthService } from 'src/app/data/services/auth.service';
import { DatabaseService } from 'src/app/data/services/database.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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
      this.toastClasses = "bg-danger text-light"
      this.toastCallBack();
    });
    if (cred) {
      user.id = cred.user.uid;
      switch (user.type) {
        case 'Admin':
          let user_ok = await this.dbSvc.CreateOne(user, 'Admins');
          console.log(user_ok);
          break;
        case 'Student':
          let student = await this.dbSvc.CreateOne(user, 'Students');
          console.log(student);
          break;
        case 'Professor':
          let professor = await this.dbSvc.CreateOne(user, 'Professors');
          console.log(professor);
          break;

        default:
          break;
      }
    }

    this.toastClasses = "bg-success text-light"
    this.toastCallBack();


  }
}
