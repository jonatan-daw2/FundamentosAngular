import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo-padre-son',
  templateUrl: './hijo-padre-son.component.html',
  styleUrls: ['./hijo-padre-son.component.css']
})
export class HijoPadreSonComponent {
    mensaje:string = "";
    mensajes:string []=[];
    @Output() mensajeEnviado = new EventEmitter<string[]>();

    constructor(){

    }

    ngOnInit(){
      this.enviar();
    }

    enviar(){
      this.mensajes.push(this.mensaje);
      console.log(this.mensajes);
      this.mensajeEnviado.emit(this.mensajes);
    }
}