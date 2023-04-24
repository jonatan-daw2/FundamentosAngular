import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-hijo-dad',
  templateUrl: './padre-hijo-dad.component.html',
  styleUrls: ['./padre-hijo-dad.component.css']
})
export class PadreHijoDadComponent {
    mensajes:string []=[];
    mensaje:string = "";

    constructor(){

    }

    enviar(){
      this.mensajes.push(this.mensaje);
    }
}
