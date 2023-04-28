import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
//import { Pedidos } from '../modelo/pedidos';
import { Router } from '@angular/router';
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
  idPedido = new FormControl(0);
  ocultarBoton:boolean = false;
  //controlador:number = 1;
  /*idPedido:number = 0;
  idCliente:number = 0;
  formaDePago:string = "";
  direccion:string = "";*/

  constructor(private router:Router, private servicios:ServicioPedidosService){
    /*this.route.queryParams.subscribe(data=>{this.controlador = data['cont']});
    //console.log("El dato: "+ this.controlador);
    if(this.controlador == undefined ){
      console.log("El dato: "+ this.controlador);
    }else{
      console.log("El dato: "+ this.controlador);
    }*/

    this.contenido =  new FormGroup({
      idPedido: this.idPedido,
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
    let id = this.idPedido.value;
    let idCliente = this.contenido.value.idCliente;
    let formaDePago = this.contenido.value.formaDePago;
    let direccion = this.contenido.value.direccion;
    if((idCliente<0 || idCliente==undefined) || formaDePago==undefined || (direccion==undefined || direccion==" ")){
      alert("Complete todos los campos");
    }else{
      this.router.navigate(["formularioDetalles"],{queryParams:{id:id,idCliente:idCliente,formaDePago:formaDePago,direccion:direccion}});
      this.ocultarBoton = true;
      console.log(id+ " "+idCliente+ " "+formaDePago+ " "+direccion);
    }
    
  }

  finalizar(){
    let idCliente = this.contenido.value.idCliente;
    let formaDePago = this.contenido.value.formaDePago;
    let direccion = this.contenido.value.direccion;
    this.servicios.altaPedidos(idCliente,formaDePago,direccion);
    console.log(this.servicios.pedido);
    console.log(this.servicios.detalles);
    console.log(this.servicios.auxiliar);
    this.contenido.reset();
    let contador = this.idPedido.value as number;
    contador++;
    this.idPedido.setValue(contador);
    this.ocultarBoton=false;
    this.dato = this.servicios.auxiliar;
  }
}
