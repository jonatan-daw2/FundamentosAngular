import { Injectable } from '@angular/core';
//import { Observable, of } from 'rxjs';
import { Pedidos } from '../modelo/pedidos';
import { DetallesPedido } from '../modelo/detallesPedido';

@Injectable({
  providedIn: 'root'
})
export class ServicioPedidosService {
  private _pedidos:Pedidos[] = []
  private _detalles: DetallesPedido[] = [];
  private _auxiliar: DetallesPedido[] = [];


  constructor() { }

  /*altaDetalles(detallesPedido:DetallesPedido){
    this.detalles.push(detallesPedido);
  }*/

  altaPedidos(idCliente:number,formaDePago:string,direccion:string){
    let pedido = new Pedidos(idCliente,formaDePago,direccion);
    this._pedidos.push(pedido);
    for (let i = 0; i < this._auxiliar.length; i++) {
      this._detalles.push(this._auxiliar[i]);
    }
    this._auxiliar = [];
    console.log(this._auxiliar);
    console.log(this._detalles);
  }

  guardarProductos(idProducto:number,cantidad:number,id:number){
      let producto = new DetallesPedido(id,idProducto,cantidad);
      this._auxiliar.push(producto);
  }

  public get auxiliar(): DetallesPedido[] {
    return this._auxiliar;
  }

  public get pedido(): Pedidos[] {
    return this._pedidos;
  }

  public get detalles(): DetallesPedido[] {
    return this._detalles;
  }
}
