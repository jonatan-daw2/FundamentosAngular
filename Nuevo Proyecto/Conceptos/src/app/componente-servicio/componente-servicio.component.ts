import { Component } from '@angular/core';
import { ServicioBasicoService } from '../service/servicio-basico.service';

@Component({
  selector: 'app-componente-servicio',
  templateUrl: './componente-servicio.component.html',
  styleUrls: ['./componente-servicio.component.css']
})
export class ComponenteServicioComponent {
  mensaje:string = "";

  constructor(private servicio:ServicioBasicoService){
   
  }

  mostrarMensaje(){
    this.mensaje = this.servicio.mensaje;
  }
}
