import { Component, EventEmitter, Output } from '@angular/core';
import { Paciente } from '../modelo/paciente';

@Component({
  selector: 'app-form-paciente',
  templateUrl: './form-paciente.component.html',
  styleUrls: ['./form-paciente.component.css']
})
export class FormPacienteComponent {
  paciente:Paciente
  @Output() pacienteEnviado = new EventEmitter<Paciente>()

  constructor(){
    this.paciente = new Paciente("","")
  }
  
  enviarPaciente(){
    this.pacienteEnviado.emit(this.paciente)
  }
}