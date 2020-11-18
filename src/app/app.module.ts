import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    ListadoProfesorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
