import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})

export class DirectivasComponent {
  //*ngIf
  nombre:string = "";
  edad:number = 0;
  resultado:boolean = false;

  mostrar(){
    this.resultado = true;
    if(this.numero<1 || this.numero>5){
      this.numero = 6;
    }
  }
  //-----------------------

  //*ngFor
  coche:string = "Volvo";
  coches:string[] = ["Renault","Volvo","Suzuki","Wolksvagen"];
  //-----------------------------------------

  //*ngSwitch
  numero:number = 1;
  //-------------------------------------------

  //ngTemplate
  //lo que se haye dentro de la etiqueta ng-template no se verá, con la finalidad de que se manejado por las directivas estructurales
  //---------------
 
}
