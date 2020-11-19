import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorMessage } from 'ng-bootstrap-form-validation';
import { User } from 'src/app/data/model/user';
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {
  @Input() isLogin: boolean;
  formRegister: FormGroup;
  email: FormControl;
  password: FormControl;
  type: FormControl;
  @Output() userRegister: EventEmitter<User> = new EventEmitter<User>();
  customErrorMessages: ErrorMessage[] = [
    {
      error: 'required',
      format: (label, error) => `${label.toUpperCase()} IS DEFINITELY REQUIRED!`
    }, {
      error: 'pattern',
      format: (label, error) => `${label.toUpperCase()} DOESN'T LOOK RIGHT...`
    }, {
      error: 'maxLength',
      format: (label, error) => `${label.toUpperCase()} MAX LENGTH 20...`
    }, {
      error: 'minLength',
      format: (label, error) => `${label.toUpperCase()} MIN LENGTH 6...`
    }

  ];

  constructor() {
    this.email = new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]);
    this.password = new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(6)]);
    this.type = new FormControl('', [Validators.required]);
    this.formRegister = new FormGroup({});
    this.formRegister.addControl('Email', this.email);
    this.formRegister.addControl('Password', this.password);
    this.formRegister.addControl('Type', this.type);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    let user: User = {
      email: this.formRegister.value.Email,
      password: this.formRegister.value.Password,
      type: this.formRegister.value.Type,
      isActive: true
    }
    this.userRegister.emit(user);
  }

  onLogin() {
    let user: User = {
      email: this.formRegister.value.Email,
      password: this.formRegister.value.Password,
      type: this.formRegister.value.Type,
      isActive: true
    }
    this.userRegister.emit(user);
  }

  onReset() {
    this.formRegister.reset();
  }

}
