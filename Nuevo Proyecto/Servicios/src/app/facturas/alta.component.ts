import { Component } from '@angular/core';
import { ServicioService } from '../services/servicio.service';
import { Facturas } from '../modelo/facturas';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css'],
})
export class AltaComponent{
  facturas:Facturas;
  facturasArray:Facturas[];

  altaEntrada:boolean = false;

  consultarTodoEntrada:boolean = false;

  consultaEntrada = false;
  busquedaConsulta:number = 0;
  resultadoBusqueda:boolean = false;

  modificacionEntrada:boolean = false;
  modificarFactura:number = 0;
  modificarIva:number = 0;
  modificacionOK:boolean = false;

  bajaEntrada:boolean = false;
  eliminacionEnvio:boolean = false;

  constructor(private facturasServicio:ServicioService){
    this.facturas = new Facturas(0,0);
    
    this.facturasArray = this.facturasServicio.getFacturas();
  }
  ngOnInit(){
   
  }

  nuevaFactura(): void{
    this.facturasServicio.aniadirFacturas(this.facturas);
    this.facturas = new Facturas(0,0);
    this.facturasArray=this.facturasServicio.getFacturas();
  }

  botonAlta(){
    this.altaEntrada = true;
    this.consultarTodoEntrada = false;
    this.consultaEntrada = false;
    this.modificacionEntrada = false;
    this.bajaEntrada = false;
  }

  botonConsultarTodo(){
    this.consultarTodoEntrada = true;
    this.altaEntrada = false;
    this.consultaEntrada = false;
    this.modificacionEntrada = false;
    this.bajaEntrada = false;
  }

  bontonConsulta(){
    this.consultaEntrada = true;
    this.altaEntrada = false;
    this.consultarTodoEntrada = false;
    this.modificacionEntrada = false;
    this.bajaEntrada = false;
  }

  buscar(){
    this.resultadoBusqueda = true;
  }

  bontonModificar(){
    this.modificacionEntrada = true;
    this.consultarTodoEntrada = false;
    this.consultaEntrada = false;
    this.altaEntrada = false;
    this.bajaEntrada = false;
  }

  modificar(){
    this.modificacionOK = true;
    this.facturasServicio.modificar(this.busquedaConsulta,this.modificarFactura,this.modificarIva);
  }

  botonBaja(){
    this.bajaEntrada = true;
    this.modificacionEntrada = false;
    this.consultarTodoEntrada = false;
    this.consultaEntrada = false;
    this.altaEntrada = false;
  }

  eliminar(){
    this.facturasServicio.comprobarID(this.busquedaConsulta);
  }
}
