import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoCursosComponent } from './listado-cursos/listado-cursos.component';
import { FormsModule } from '@angular/forms';
import { ServicioService } from './services/servicio.service';
import { ModificarCursoComponent } from './modificar-curso/modificar-curso.component';


@NgModule({
  exports:[ListadoCursosComponent],
  declarations: [
    AppComponent,
    ListadoCursosComponent,
    ModificarCursoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
