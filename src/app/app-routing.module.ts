import { ListadoAlumnoComponent } from './components/alumno/listado-alumno/listado-alumno.component';
import { ProfeGuard } from './guards/profe.guard';
import { ExamenComponent } from './components/examen/examen.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { AgregarMateriaComponent } from './components/alumno/agregar-materia/agregar-materia.component';
import { MySubjectsComponent } from './components/alumno/my-subjects/my-subjects.component';
import { ListadoUsuarioComponent } from './components/listado-usuario/listado-usuario.component';
import { AltaMateriaComponent } from './components/materia/alta-materia/alta-materia.component';
import { ListadoMateriaComponent } from './components/materia/listado-materia/listado-materia.component';
import { AdminGuard } from './guards/admin.guard';
import { AlumnoGuard } from './guards/alumno.guard';
import { AddSubjectComponent } from './pages/add-subject/add-subject.component';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ActasExamenComponent } from './pages/actas-examen/actas-examen.component';


const routes: Routes = [
  {path:'',component:LoginComponent, data:{animation: 'home'}},
  {path:'login',component:LoginComponent, data:{animation: 'login'}},
  {path:'home',component:HomeComponent,data:{animation: 'home'},children:[
    {path:'',component:MySubjectsComponent},
    {path:'listSubjects',component:MySubjectsComponent, canActivate:[AdminGuard]},
    {path:'listDeletes',component:ListadoAlumnoComponent, canActivate:[AdminGuard]},
    {path:'addAdmin',component:AddAdminComponent, canActivate:[AdminGuard]},
    {path:'listUsers',component:ListadoUsuarioComponent, canActivate:[AdminGuard]},
    {path:'inscription',component:AgregarMateriaComponent, canActivate:[AlumnoGuard]},
    {path:'mySubjects',component:MySubjectsComponent, canActivate:[AlumnoGuard]},
    {path:'subjects',component:MySubjectsComponent, canActivate:[ProfeGuard]},
    {path:'exam',component:ExamenComponent, canActivate:[ProfeGuard]},
    {path:'listExams',component:ActasExamenComponent, canActivate:[ProfeGuard]},
  ]},
  {path:'register',component:RegisterComponent,data:{animation: 'registro'}},
  {path:'addSubject',component:AddSubjectComponent, canActivate:[AdminGuard]},

  {path:'**',component:ErrorComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
