import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/data/model/user';
import { AuthService } from 'src/app/data/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  currentUser;
  toastShow: boolean;
  toastClasses: string;
  constructor(private authSvc:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  getUserLogin(user:User){
    console.log(user);
    this.authSvc.signIn(user).then(()=>{
      this.currentUser=this.authSvc.user;
      this.router.navigate(['/home']);

    });
  }
}
