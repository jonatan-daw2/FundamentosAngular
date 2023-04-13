import { Component } from '@angular/core';

@Component({
  selector: 'app-aplicacion',
  templateUrl: './aplicacion.component.html',
  styleUrls: ['./aplicacion.component.css']
})
export class AplicacionComponent {
  titulo = "Calculadora";
  dato1:number = 0;
  dato2:number = 0;
  resultado:number = 0;

  constructor(){

  }

  /*dato3:number = 0;
  dato4:number = 0;
  resultado2:number = 0;
  signo = [""," + "," - "," ÷ "," x "," = "];*/


  /*pulsanumero():void{
    this.dato3 = 7;
  }*/

  sumar():void {
    this.resultado = this.dato1 + this.dato2;
  }

  restar():void {
    this.resultado = this.dato1 - this.dato2;
  }

  dividir():void {
    this.resultado = this.dato1 / this.dato2;
  }

  multiplicar():void {
    this.resultado = this.dato1 * this.dato2;
  }
}
