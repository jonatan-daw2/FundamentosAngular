import { Component } from '@angular/core';

@Component({
  selector: 'app-tercer-componente',
  templateUrl: './tercer-componente.component.html',
  styleUrls: ['./tercer-componente.component.css']
})
export class TercerComponenteComponent {
  constructor(){

  }

  ngOnInit(): void{
    this.variables();
  }

  //metodo y declaracion de variables
  variables() {
    let cadena:string = "texto";
    let numero:number = 10;
    let bandera:boolean = true;
    let sinTipado = "hola";
    let conAny: any = false;
    let conUnknow: unknown = 1;
    let indefinido:undefined = undefined;
    let nulo:null = null; 

    console.log("String "+ cadena);
    console.log("Numerico "+ numero);
    console.log("Boolean "+ bandera);
    console.log("Sin tipar "+ sinTipado);
    console.log("Con Any "+ conAny);
    console.log("Con Unknow "+ conUnknow);
    console.log("Con undefined "+ indefinido);
    console.log("Con null "+ nulo);
  }
}

