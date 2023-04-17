import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuncionesArraysComponent } from './funciones-arrays/funciones-arrays.component';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';
import { DirectivasComponent } from './directivas/directivas.component';
@NgModule({
  declarations: [
    AppComponent,
    FuncionesArraysComponent,
    FormularioComponent,
    DirectivasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
