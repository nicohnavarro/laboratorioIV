import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './components/layout/nav-bar/nav-bar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { DetalleAlumnoComponent } from './components/alumno/detalle-alumno/detalle-alumno.component';
import { ListadoAlumnoComponent } from './components/alumno/listado-alumno/listado-alumno.component';
import { ListadoMateriaComponent } from './components/materia/listado-materia/listado-materia.component';
import { DetalleMateriaComponent } from './components/materia/detalle-materia/detalle-materia.component';
import { DetalleProfesorComponent } from './components/profesor/detalle-profesor/detalle-profesor.component';
import { ListadoProfesorComponent } from './components/profesor/listado-profesor/listado-profesor.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { FormUsuarioComponent } from './components/form-usuario/form-usuario.component';
import { NgBootstrapFormValidationModule,CUSTOM_ERROR_MESSAGES } from 'ng-bootstrap-form-validation';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ERRORS } from './utils/custom-errors';
import { RegisterComponent } from './pages/register/register.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AltaMateriaComponent } from './components/materia/alta-materia/alta-materia.component';
import { AddSubjectComponent } from './pages/add-subject/add-subject.component';
import { ComboProfesorComponent } from './components/profesor/combo-profesor/combo-profesor.component';
import { ListadoUsuarioComponent } from './components/listado-usuario/listado-usuario.component';
import { AgregarMateriaComponent } from './components/alumno/agregar-materia/agregar-materia.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { MySubjectsComponent } from './components/alumno/my-subjects/my-subjects.component';
import { CantidadAlumnosDirective } from './directives/cantidad-alumnos.directive';
import { NotaPipe } from './pipes/nota.pipe';
import { ListadoDeAsignaturasComponent } from './components/listado-de-asignaturas/listado-de-asignaturas.component';
import { ListadoAprobacionDirectaComponent } from './components/listado-aprobacion-directa/listado-aprobacion-directa.component';
import { ListadoAprobacionNoDirectaComponent } from './components/listado-aprobacion-no-directa/listado-aprobacion-no-directa.component';
import { ExamenComponent } from './components/examen/examen.component';
import { ToastrModule } from 'ngx-toastr';
import { ComboAlumnoComponent } from './components/alumno/combo-alumno/combo-alumno.component';
import { ActasExamenComponent } from './pages/actas-examen/actas-examen.component';
import { AprobadoPipe } from './pipes/aprobado.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    DetalleAlumnoComponent,
    ListadoAlumnoComponent,
    ListadoMateriaComponent,
    DetalleMateriaComponent,
    DetalleProfesorComponent,
    ListadoProfesorComponent,
    LoginComponent,
    HomeComponent,
    ErrorComponent,
    FormUsuarioComponent,
    RegisterComponent,
    AltaMateriaComponent,
    AddSubjectComponent,
    ComboProfesorComponent,
    ListadoUsuarioComponent,
    AgregarMateriaComponent,
    AddAdminComponent,
    MySubjectsComponent,
    CantidadAlumnosDirective,
    NotaPipe,
    ListadoDeAsignaturasComponent,
    ListadoAprobacionDirectaComponent,
    ListadoAprobacionNoDirectaComponent,
    ExamenComponent,
    UploadImageComponent,
    ComboAlumnoComponent,
    ActasExamenComponent,
    AprobadoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgBootstrapFormValidationModule.forRoot(),
    NgBootstrapFormValidationModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ToastrModule.forRoot(),
  ],
  providers: [{
    provide: CUSTOM_ERROR_MESSAGES,
    useValue: CUSTOM_ERRORS,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
