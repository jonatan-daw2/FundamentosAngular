import { Component, Input } from '@angular/core';
import { Medico } from '../modelo/medico';


@Component({
  selector: 'app-lista-medico',
  templateUrl: './lista-medico.component.html',
  styleUrls: ['./lista-medico.component.css']
})
export class ListaMedicoComponent {
  @Input() medicos2:Medico
  medicosLista:Medico[]=[]

  constructor(){
    this.medicos2=new Medico("","",0,"")
  }

  anadir(){
    this.medicosLista.push(new Medico(this.medicos2.nombre,this.medicos2.apellidos,this.medicos2.cedula,this.medicos2.foto))
  }
}