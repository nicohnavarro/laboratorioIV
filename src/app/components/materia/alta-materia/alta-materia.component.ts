import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorMessage } from 'ng-bootstrap-form-validation';
import { Professor } from 'src/app/data/model/professor';
import { Subject } from 'src/app/data/model/subject';
import { AuthService } from 'src/app/data/services/auth.service';
import { DatabaseService } from 'src/app/data/services/database.service';

@Component({
  selector: 'app-alta-materia',
  templateUrl: './alta-materia.component.html',
  styleUrls: ['./alta-materia.component.css'],
})
export class AltaMateriaComponent implements OnInit {
  formRegister: FormGroup;
  listaProfes: Professor[];
  name: FormControl;
  quotas: FormControl;
  term: FormControl;
  professor: Professor;

  imagen_uno: string = '/assets/images/user.png';
  subirImagen_uno;

  @Output() user_img_1: EventEmitter<File> = new EventEmitter<File>();

  @Output() subjectRegister: EventEmitter<Subject> =
    new EventEmitter<Subject>();
  customErrorMessages: ErrorMessage[] = [
    {
      error: 'required',
      format: (label, error) =>
        `${label.toUpperCase()} IS DEFINITELY REQUIRED!`,
    },
  ];
  constructor(private dbSvc: DatabaseService) {
    this.name = new FormControl('', [Validators.required]);
    this.quotas = new FormControl('', [Validators.required]);
    this.term = new FormControl('', [Validators.required]);
    this.formRegister = new FormGroup({});
    this.formRegister.addControl('Name', this.name);
    this.formRegister.addControl('Quotas', this.quotas);
    this.formRegister.addControl('Term', this.term);
    this.dbSvc.GetAll('Users').subscribe((data) => {
      this.listaProfes = data.filter((profe) => profe.type == 'Professor');
    });
  }
  obtieneImagen_uno(e) {
    this.imagen_uno = e.result;
  }
  archivoSubir_uno(e) {
    this.subirImagen_uno = e;
    this.user_img_1.emit(e);
  }
  ngOnInit(): void {}

  onSubmit() {
    let subject: Subject = {
      name: this.formRegister.value.Name,
      term: this.formRegister.value.Term,
      quotas: this.formRegister.value.Quotas,
      profesor: this.professor,
      students: [],
      image: this.imagen_uno,
    };
    this.subjectRegister.emit(subject);
  }

  onReset() {
    this.formRegister.reset();
  }
  getProfessor(profe) {
    this.professor = profe;
  }
}
