import { Component, EventEmitter, Output } from '@angular/core';
import { Pedidos } from '../modelo/pedidos';

@Component({
  selector: 'app-hijo-pedido',
  templateUrl: './hijo-pedido.component.html',
  styleUrls: ['./hijo-pedido.component.css']
})
export class HijoPedidoComponent {
  pedido = new Pedidos("",0,0);
  pedidos:Pedidos[]=[];
  @Output() pedidoEnviado = new EventEmitter<Pedidos[]>();

  constructor(){
  }

  enviarPedido(){
    let pedido = new Pedidos(this.pedido.nombreCliente, this.pedido.totalProductos, this.pedido.importeTotal);
    this.pedidos.push(pedido);
    this.pedidoEnviado.emit(this.pedidos);
  }
}
