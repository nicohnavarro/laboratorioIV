import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorMessage } from 'ng-bootstrap-form-validation';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/data/model/user';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css'],
})
export class FormUsuarioComponent implements OnInit {
  @Input() isLogin: boolean;
  @Input() isAdmin: boolean;
  formRegister: FormGroup;
  email: FormControl;
  password: FormControl;
  type: FormControl;
  imagen_uno: string = '/assets/images/user.png';
  subirImagen_uno;

  @Output() user_img_1: EventEmitter<File> = new EventEmitter<File>();

  @Output() userRegister: EventEmitter<User> = new EventEmitter<User>();
  customErrorMessages: ErrorMessage[] = [
    {
      error: 'required',
      format: (label, error) =>
        `${label.toUpperCase()} IS DEFINITELY REQUIRED!`,
    },
    {
      error: 'pattern',
      format: (label, error) => `${label.toUpperCase()} DOESN'T LOOK RIGHT...`,
    },
    {
      error: 'maxLength',
      format: (label, error) => `${label.toUpperCase()} MAX LENGTH 20...`,
    },
    {
      error: 'minLength',
      format: (label, error) => `${label.toUpperCase()} MIN LENGTH 6...`,
    },
  ];

  constructor() {
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      ),
    ]);
    //this.email = new FormControl('', [Validators.required]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(6),
    ]);
    this.type = new FormControl('', [Validators.required]);
    this.formRegister = new FormGroup({});
    this.formRegister.addControl('Email', this.email);
    this.formRegister.addControl('Password', this.password);
    this.formRegister.addControl('Type', this.type);
  }

  ngOnInit(): void {
    if (this.isAdmin) {
      this.type.setValue('Admin');
    }
  }

  obtieneImagen_uno(e) {
    this.imagen_uno = e.result;
  }
  archivoSubir_uno(e) {
    this.subirImagen_uno = e;
  }

  onSubmit() {
    if (this.isAdmin) {
      this.type.setValue('Admin');
    }
    let user: User = {
      email: this.formRegister.value.Email,
      password: this.formRegister.value.Password,
      type: this.formRegister.value.Type,
      isActive: true,
    };
    this.userRegister.emit(user);
  }

  onChange(option) {
    switch (option) {
      case 'Admin1':
        this.email.setValue('admin@admin.com');
        this.password.setValue('123123');
        break;
      case 'Admin2':
        this.email.setValue('admin2@admin.com');
        this.password.setValue('123123');
        break;
      case 'Student1':
        this.email.setValue('student@student.com');
        this.password.setValue('123123');
        break;
      case 'Student2':
        this.email.setValue('student2@student.com');
        this.password.setValue('123123');
        break;
      case 'Professor1':
        this.email.setValue('professor@professor.com');
        this.password.setValue('123123');
        break;
      case 'Profesor2':
        this.email.setValue('professor2@professor.com');
        this.password.setValue('123123');
        break;

      default:
        break;
    }
  }

  onLogin() {
    let user: User = {
      email: this.formRegister.value.Email,
      password: this.formRegister.value.Password,
      type: this.formRegister.value.Type,
      isActive: true,
    };
    this.userRegister.emit(user);
  }

  onReset() {
    this.formRegister.reset();
  }
}
