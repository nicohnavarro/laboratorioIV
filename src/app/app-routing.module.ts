import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { AgregarMateriaComponent } from './components/alumno/agregar-materia/agregar-materia.component';
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


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent,children:[
    {path:'listSubjects',component:ListadoMateriaComponent, canActivate:[AdminGuard]},
    {path:'addAdmin',component:AddAdminComponent, canActivate:[AdminGuard]},
    {path:'listUsers',component:ListadoUsuarioComponent, canActivate:[AdminGuard]},
    {path:'inscription',component:AgregarMateriaComponent, canActivate:[AlumnoGuard]},
  ]},
  {path:'register',component:RegisterComponent},
  {path:'addSubject',component:AddSubjectComponent, canActivate:[AdminGuard]},

  {path:'**',component:ErrorComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
