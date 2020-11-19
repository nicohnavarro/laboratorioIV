import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  navbarCollapsed = true;
  public isCollapsed = true;
  @Input() user;
  constructor() { }

  ngOnInit(): void {
  }


  toggleMenu() {
     this.isCollapsed = !this.isCollapsed;
   }
 

}
