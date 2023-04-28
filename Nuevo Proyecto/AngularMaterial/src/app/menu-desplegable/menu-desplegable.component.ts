import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../services/servicios.service';
import { Opciones } from '../modelo/menu';

@Component({
  selector: 'app-menu-desplegable',
  templateUrl: './menu-desplegable.component.html',
  styleUrls: ['./menu-desplegable.component.css']
})
export class MenuDesplegableComponent implements OnInit {
  contendor:Opciones[] = [];
  constructor(private servicio:ServiciosService){

  }

  ngOnInit(){
    this.contendor = this.servicio.menu;
  }

  opcion(ruta:string){
    this.servicio.opcion(ruta);
  }
}
