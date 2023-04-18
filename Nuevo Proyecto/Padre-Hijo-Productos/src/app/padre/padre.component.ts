import { Component } from '@angular/core';
import { Producto } from '../modelo/producto';
import { tipoProducto } from '../modelo/enumerado';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  tipo:tipoProducto = tipoProducto.Limpieza;
  producto = new Producto("",0,0,this.tipo);
  productos: Producto[]=[];
  tiposDeProductos = Object.values(tipoProducto);

  actualizar(){
    let producto_aux = new Producto(this.producto._nombre,this.producto._precio,this.producto._stock, this.producto._tipo);
    this.productos.push(producto_aux);
  }
}
