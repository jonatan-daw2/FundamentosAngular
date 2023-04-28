import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ServicioPedidosService } from '../service/servicio-pedidos.service';

@Component({
  selector: 'app-formulario-detalle-pedidos',
  templateUrl: './formulario-detalle-pedidos.component.html',
  styleUrls: ['./formulario-detalle-pedidos.component.css']
})
export class FormularioDetallePedidosComponent {
  contenido:FormGroup;
  id:number = 0;
  idCliente:number = 0;
  formaDepago:string = "";
  direccion:string = "";
  dato:any;
  cont:number = 0;

  constructor(private servicios:ServicioPedidosService, private router:ActivatedRoute,private fb: FormBuilder){
    this.router.queryParams.subscribe(data=>{this.id = data['id'],
                                             this.idCliente = data['idCliente'],
                                             this.formaDepago = data['formaDePago'],
                                             this.direccion = data['direccion']});
                                          
     this.contenido = new FormGroup({
      idPedido: new FormControl(this.id),
      idProducto: new FormControl(0),
      cantidad: new FormControl(0)
    });
  }

  aniadirProducto(){
    let id = this.id;
    let idProducto = this.contenido.value.idProducto;
    let cantidad = this.contenido.value.cantidad;
    if((idProducto<0 || idProducto==undefined) || (cantidad==0 || cantidad==undefined || cantidad<0)){
      alert("Complete todos los campos de producto");
    }else{
      this.servicios.guardarProductos(idProducto,cantidad,id);
      this.dato = this.servicios.auxiliar;
      this.contenido.reset();
      this.contenido.controls['idPedido'].setValue(this.id);
      console.log(this.servicios.auxiliar);
    }
  }
}
