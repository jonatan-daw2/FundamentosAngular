import { Component } from '@angular/core';
import { Pedidos } from '../modelo/pedidos';

@Component({
  selector: 'app-padre-pedido',
  templateUrl: './padre-pedido.component.html',
  styleUrls: ['./padre-pedido.component.css']
})
export class PadrePedidoComponent {
  pedidos:Pedidos[]=[];

  aniadir(pedidos:Pedidos[]){
    this.pedidos=pedidos;
  }

}
