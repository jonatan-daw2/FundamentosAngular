import { Component } from '@angular/core';

@Component({
  selector: 'app-divisas',
  templateUrl: './divisas.component.html',
  styleUrls: ['./divisas.component.css']
})
export class DivisasComponent {
  titulo:string = "Divisas";
  dato1:number = 0;
  resultado:any = "";

  constructor(){
  }

  ngOnInit(): void{
    this.conversionDolares();
    this.conversionPesos();
    this.ConversionYenes();
    this.resultadoVacio();
  }

  conversionDolares(){
    this.resultado = this.dato1 * 1.10;
    this.resultado += " $";
  }

  conversionPesos(){
    this.resultado = this.dato1 * 60.45;
    this.resultado += " RD$";
  }

  ConversionYenes(){
    this.resultado = this.dato1 * 146.64;
    this.resultado += " ¥";
  }

  resultadoVacio(){
    this.resultado = "";
  }
}
