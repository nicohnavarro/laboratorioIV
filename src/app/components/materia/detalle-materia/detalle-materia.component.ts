import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detalle-materia',
  templateUrl: './detalle-materia.component.html',
  styleUrls: ['./detalle-materia.component.css']
})
export class DetalleMateriaComponent implements OnInit {

  constructor() { }
  @Input() subject
  ngOnInit(): void {
  }

}
