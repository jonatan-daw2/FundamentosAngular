import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormMedicoComponent } from './form-medico/form-medico.component';
import { ListaMedicoComponent } from './lista-medico/lista-medico.component';
import { FormsModule } from '@angular/forms';
import { FormPacienteComponent } from './form-paciente/form-paciente.component';
import { ListaPacienteComponent } from './lista-paciente/lista-paciente.component';

@NgModule({
  declarations: [
    AppComponent,
    FormMedicoComponent,
    ListaMedicoComponent,
    FormPacienteComponent,
    ListaPacienteComponent,
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