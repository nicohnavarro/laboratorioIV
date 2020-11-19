import { Component, OnInit, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';
import { openSync } from 'fs';
import { from } from 'rxjs';
import { User } from 'src/app/data/model/user';
import { DatabaseService } from 'src/app/data/services/database.service';

@Component({
  selector: 'app-listado-usuario',
  templateUrl: './listado-usuario.component.html',
  styleUrls: ['./listado-usuario.component.css']
})
export class ListadoUsuarioComponent implements OnInit {

  usuarios:User[];
  usuariosAll:User[];
  filter = new FormControl('');
  constructor(private dbSvc:DatabaseService) { 
    this.dbSvc.GetAll("Users").subscribe((data)=>{
      this.usuariosAll = data;
      this.usuarios = this.usuariosAll;
    })
  }

  ngOnInit(): void {
  }

  onChange(option){
    console.log(option)
     if(option === 'All'){
       this.usuarios = this.usuariosAll;
     }
     else{
      this.usuarios = this.usuariosAll.filter(usuario =>{
        return usuario.type == option;
      })
     }
  }

  search(text: string, pipe: PipeTransform): User[] {
    return this.usuarios.filter(usuario => {
      const term = text.toLowerCase();
      return usuario.email.toLowerCase().includes(term)
          || pipe.transform(usuario.type).includes(term);
    });
  }

}
