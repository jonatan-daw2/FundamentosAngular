import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Pedidos } from '../modelo/pedidos';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioPedidosService } from '../service/servicio-pedidos.service';

@Component({
  selector: 'app-formulario-datos-pedido',
  templateUrl: './formulario-datos-pedido.component.html',
  styleUrls: ['./formulario-datos-pedido.component.css']
})
export class FormularioDatosPedidoComponent implements OnInit{

  contenido:FormGroup = new FormGroup({});
  id:number = 0;
  dato:any;
  cont:number = 0;
  //controlador:number = 1;
  /*idPedido:number = 0;
  idCliente:number = 0;
  formaDePago:string = "";
  direccion:string = "";*/

  constructor(private router:Router, private route:ActivatedRoute, private fb: FormBuilder, private servicios:ServicioPedidosService){
    /*this.route.queryParams.subscribe(data=>{this.controlador = data['cont']});
    //console.log("El dato: "+ this.controlador);
    if(this.controlador == undefined ){
      console.log("El dato: "+ this.controlador);
    }else{
      console.log("El dato: "+ this.controlador);
    }*/
    
    this.contenido =  this.fb.group({
      idPedido: new FormControl({ value: this.id=this.cont, disabled: false }),
      idCliente: new FormControl(),
      formaDePago: new FormControl(),
      direccion: new FormControl()
    });
  }

  ngOnInit(): void {
    this.dato = this.servicios.auxiliar;
  }

  envio(){
    //let pedido = new Pedidos(this.contenido.value.idCliente,this.contenido.value.formaDePago,this.contenido.value.direccion,this.contenido.value.idPedido);
    let id = this.contenido.value.idPedido
    let idCliente = this.contenido.value.idCliente;
    let formaDePago = this.contenido.value.formaDePago;
    let direccion = this.contenido.value.direccion;
    this.router.navigate(["formularioDetalles"],{queryParams:{id:id,idCliente:idCliente,formaDePago:formaDePago,direccion:direccion}});
    console.log(id+ " "+idCliente+ " "+formaDePago+ " "+direccion);
  }

  finalizar(){
    let idCliente = this.contenido.value.idCliente;
    let formaDePago = this.contenido.value.formaDePago;
    let direccion = this.contenido.value.direccion;
    this.servicios.altaPedidos(idCliente,formaDePago,direccion);
   
    console.log(this.servicios.pedido);
  }
}
