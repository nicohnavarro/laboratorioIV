import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from 'src/app/data/model/user';
import { DatabaseService } from 'src/app/data/services/database.service';

@Component({
  selector: 'app-listado-usuario',
  templateUrl: './listado-usuario.component.html',
  styleUrls: ['./listado-usuario.component.css'],
})
export class ListadoUsuarioComponent implements OnInit {
  usuarios: User[];
  usuariosAll: User[];
  filter = new FormControl('');
  constructor(private dbSvc: DatabaseService,private toastr:ToastrService) {
    this.dbSvc.GetAll('Users').subscribe((data) => {
      this.usuariosAll = data.filter((user) => user.isActive);
      this.usuarios = this.usuariosAll;
    });
  }

  ngOnInit(): void {}

  onChange(option) {
    if (option === 'All') {
      this.usuarios = this.usuariosAll;
    } else {
      this.usuarios = this.usuariosAll.filter((usuario) => {
        return usuario.type == option;
      });
    }
  }

  search(text: string, pipe: PipeTransform): User[] {
    return this.usuarios.filter((usuario) => {
      const term = text.toLowerCase();
      return (
        usuario.email.toLowerCase().includes(term) ||
        pipe.transform(usuario.type).includes(term)
      );
    });
  }

  deleteUser(usuario) {
    usuario.isActive = false;
    this.dbSvc.UpdateOne(usuario, 'Users').then(() => {
      this.dbSvc.GetAll('Users').subscribe((data) => {
        this.usuariosAll = data.filter((user) => user.isActive);
        this.usuarios = this.usuariosAll;
      });
    });
    this.toastr.warning('You have deleted a user', 'Caution!',{positionClass:'toast-bottom-right'}); 
    this.dbSvc.CreateOne({ ...usuario, date: new Date() }, 'Deletes');
  }
}
