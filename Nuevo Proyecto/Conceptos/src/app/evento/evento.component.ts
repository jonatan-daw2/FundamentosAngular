import { Component } from '@angular/core';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent {
  contendorCoches:string[]=["Mercedes","Renault","Dacia","Seat","Wolksvagen"];
  eventoCoche(){
    let numero = Math.floor(Math.random() * 4);
    let mensaje = "Te ha tocado un "+ this.contendorCoches[numero];
    alert(mensaje);
  }
}
