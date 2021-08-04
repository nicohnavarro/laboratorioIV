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
  constructor(private authSvc: AuthService, private dbSvc: DatabaseService,private toastr:ToastrService) {
  }

  ngOnInit(): void {}

  
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  async getUserRegister(user: User) {
    let cred = await this.authSvc.signUp(user).catch((err) => {
      this.comment = 'Error' + err.message;
      this.showSuccess();
    });
    if (cred) {
      user.id = cred.user.uid;
      await this.dbSvc.CreateOne(user, 'Users');
      /*switch (user.type) {
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
      }*/
    }

    this.comment = 'Account created';
    this.showSuccess();
  }
}
