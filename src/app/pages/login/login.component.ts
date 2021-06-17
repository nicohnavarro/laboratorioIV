import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/data/model/user';
import { AuthService } from 'src/app/data/services/auth.service';
import { DatabaseService } from 'src/app/data/services/database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  currentUser;
  toastShow: boolean;
  toastClasses: string;
  comment: string;
  constructor(private authSvc:AuthService,private dbSvc:DatabaseService, private router:Router) {
    this.currentUser = authSvc.user;
   }

  ngOnInit(): void {
  }

  toastCallBack() {
    this.toastShow = true;
    setTimeout(() => {
      this.toastShow = false;
    }, 3000);
  }

  
  getUserLogin(user:User){
    this.toastClasses = "bg-success text-light";
    this.comment = 'Login confirmed';
    this.authSvc.signIn(user).then(()=>{
    this.toastCallBack();
      let idCurrentUser = this.authSvc.user.uid;
      this.dbSvc.GetOne('Users',idCurrentUser).then((data)=>{
        this.currentUser= data;
        this.authSvc.user=data;
        console.log(this.authSvc.user);
        this.router.navigate(['/home']);
      })
    }).catch((e)=>{
      this.comment = e.message;
      this.toastClasses = "bg-danger text-light";
      this.toastCallBack();
  });
  }
}
