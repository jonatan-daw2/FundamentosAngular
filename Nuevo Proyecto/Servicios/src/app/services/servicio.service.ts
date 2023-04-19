import { Injectable } from '@angular/core';
import { Facturas } from '../modelo/facturas';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private facturas: Facturas[]=[];
  constructor() { 
    
  }

  getFacturas(){
    return this.facturas;
  }

  aniadirFacturas(factura: Facturas){
    this.facturas.push(factura);
  }

  modificar(busquedaConsulta:number, modificarFactura:number, modificarIva:number){
    for (let i = 0; i < this.facturas.length; i++) {
      if(this.facturas[i].idFacturas == busquedaConsulta){
        this.facturas[i].totalFactura =modificarFactura;
        this.facturas[i].iva = modificarIva;
      }
    }
  }

  comprobarID(busquedaConsulta:number){
    let resultado = false;
    for (let i = 0; i < this.facturas.length; i++) {  
      if(this.facturas[i].idFacturas == busquedaConsulta){
        resultado = true;
        let confirmacionElminacion = confirm("¿Quieres eliminar el elemento?");
        if(confirmacionElminacion){
          this.eliminar(i);
        }
      }
    }
    if(resultado==false){
      alert("La ID no existe");
    }
  }
  

  eliminar(dato:number){
    this.facturas.splice(dato,1);
  }

}
