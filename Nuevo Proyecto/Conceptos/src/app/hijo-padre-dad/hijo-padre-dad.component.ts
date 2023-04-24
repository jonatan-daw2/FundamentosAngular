import { Component } from '@angular/core';

@Component({
  selector: 'app-hijo-padre-dad',
  templateUrl: './hijo-padre-dad.component.html',
  styleUrls: ['./hijo-padre-dad.component.css']
})
export class HijoPadreDadComponent {
    mensajesRecibidos:string []=[];

    aniadir(mensajes:any){
      console.log("hola");
      this.mensajesRecibidos = mensajes;
    }
}
