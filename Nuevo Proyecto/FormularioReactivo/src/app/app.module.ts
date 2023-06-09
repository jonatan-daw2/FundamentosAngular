import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ListadoAlumnosComponent } from './listado-alumnos/listado-alumnos.component';
import { ServicioAlumnosService } from './service/servicio-alumnos.service';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListadoAlumnosComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ServicioAlumnosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
