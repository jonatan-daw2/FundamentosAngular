import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
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

  constructor(private servicios:ServicioPedidosService, private router:ActivatedRoute,private fb: FormBuilder,private route:Router){
    this.router.queryParams.subscribe(data=>{this.id = data['id'],
                                             this.idCliente = data['idCliente'],
                                             this.formaDepago = data['formaDePago'],
                                             this.direccion = data['direccion']});
                                          
     this.contenido = this.fb.group({
      idPedido: new FormControl({value:this.id, disabled: true}),
      idProducto: new FormControl(""),
      cantidad: new FormControl("")
    });
  }

  aniadirProducto(){
    let id = this.id;
    let idProducto = this.contenido.value.idProducto;
    let cantidad = this.contenido.value.cantidad;
    this.servicios.guardarProductos(idProducto,cantidad,id);
    this.dato = this.servicios.auxiliar;
    console.log(this.servicios.auxiliar);
    //console.log(this.cont);
    //console.log(this.id);
  }
}
