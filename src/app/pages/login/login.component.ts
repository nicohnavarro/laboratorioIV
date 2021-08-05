import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  constructor(private authSvc:AuthService,private dbSvc:DatabaseService, private router:Router,private toastr:ToastrService) {
    this.currentUser = authSvc.user;
  }
  
  ngOnInit(): void {
  }

  
  getUserLogin(user:User){
    this.authSvc.signIn(user).then(()=>{
      this.toastr.success('Login Successfully', 'Great!',{positionClass:'toast-bottom-right'}); 
      let idCurrentUser = this.authSvc.user.uid;
      this.dbSvc.GetOne('Users',idCurrentUser).then((data)=>{
        this.currentUser= data;
        this.authSvc.user=data;
        this.router.navigate(['/home']);
      })
    }).catch((e)=>{
      this.toastr.error("Something goes wrong",e.message,{positionClass:'toast-bottom-right'});
  });
  }
}
