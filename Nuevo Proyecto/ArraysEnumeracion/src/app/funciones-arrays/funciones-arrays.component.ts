import { Component } from '@angular/core';

@Component({
  selector: 'app-funciones-arrays',
  templateUrl: './funciones-arrays.component.html',
  styleUrls: ['./funciones-arrays.component.css']
})
export class FuncionesArraysComponent {
  //declaraciones de un array
  /* numeros: number[];
     numero: number[] = [1,2,3,4,5];
  */
  numero:number[] = [4,6,2,17,8,9];

  //función uno push()->Introducir un dato al array al final del mismo
  verResultados(){
    this.aniadir();
    this.borrar();
    this.concatenacion();
    this.existenciaIndicie(99);
    this.reducir();
  }

  aniadir(){
    this.numero.push(10);
    console.log("funcion push: "+ this.numero);
  }

  borrar(){
    this.numero.pop();
    console.log("funcion pop: "+ this.numero);
  }
  
  concatenacion(){
   let otroArray:number[] = [99,100,101];
   this.numero = this.numero.concat(otroArray);
   console.log("Funcion concat :"+ this.numero);
  }

  existenciaIndicie(numero:number){
    this.numero.indexOf(numero);
    console.log("Funcion indexoF. El número 99 esta en la posición: "+ this.numero.indexOf(numero));
  }

  //reduce de izquierda a derecha
  reducir(){
    console.log("Resultado total de la suma de todos los valores: "+ this.numero.reduce(function(a,b){return a + b; }));
  }
}
