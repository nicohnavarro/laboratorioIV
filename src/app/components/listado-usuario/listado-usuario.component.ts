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
  toastShow: boolean;
  toastClasses: string;
  comment: string;
  filter = new FormControl('');
  constructor(private dbSvc: DatabaseService) {
    this.dbSvc.GetAll('Users').subscribe((data) => {
      this.usuariosAll = data.filter((user) => user.isActive);
      this.usuarios = this.usuariosAll;
    });
  }
  toastCallBack() {
    this.toastShow = true;
    setTimeout(() => {
      this.toastShow = false;
    }, 3000);
  }
  ngOnInit(): void {}

  onChange(option) {
    console.log(option);
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
    console.log(usuario);
    usuario.isActive = false;
    this.dbSvc.UpdateOne(usuario, 'Users').then(() => {
      this.toastClasses = 'bg-danger text-light';
      this.comment = 'User deleted';
      this.toastCallBack();
      this.dbSvc.GetAll('Users').subscribe((data) => {
        this.usuariosAll = data.filter((user) => user.isActive);
        this.usuarios = this.usuariosAll;
      });
    });
    this.dbSvc.CreateOne({ ...usuario, date: new Date() }, 'Deletes');
  }
}
