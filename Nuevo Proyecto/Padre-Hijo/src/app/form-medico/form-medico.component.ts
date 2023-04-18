import { Component } from '@angular/core';
import { Medico } from '../modelo/medico';

@Component({
  selector: 'app-form-medico',
  templateUrl: '../form-medico/form-medico.component.html',
  styleUrls: ['../form-medico/form-medico.component.css']
})
export class FormMedicoComponent {

  medicos1:Medico;

  constructor(){
    this.medicos1=new Medico("","",0,"");
  }
}