import { Component, Input, OnInit } from '@angular/core';
import { NgbToastConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {

  @Input() show:boolean;
  @Input() classes:string;
  constructor(private config:NgbToastConfig) {
    config.delay = 4000;
    config.autohide = true;
    this.classes = "bg-danger text-light";
   }

  ngOnInit(): void {
  }

}
