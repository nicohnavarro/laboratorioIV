import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/data/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
currentUser;
  constructor(private authSvc:AuthService) { 
    this.currentUser = this.authSvc.user;
  }

  ngOnInit(): void {
  }

}
