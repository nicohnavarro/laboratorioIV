import { AuthService } from './../../../data/services/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  navbarCollapsed = true;
  public isCollapsed = true;
  @Input() user;
  constructor(private authSvc:AuthService,private router:Router) { }

  ngOnInit(): void {
  }


  toggleMenu() {
     this.isCollapsed = !this.isCollapsed;
   }

   logout(){
    this.authSvc.logout().then(()=>{  
      this.authSvc.user = null;
      this.router.navigate(['login'])
    })
   }
 

}
