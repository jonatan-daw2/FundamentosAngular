import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {
  resultado:boolean = false;
  numero:number = 0;
  fruta:string [] = [Frutas.manzana];
  frutas:string []=[Frutas.manzana,Frutas.pera,Frutas.platano,Frutas.uva,Frutas.coco];
  
  mostrarResultado(){
    this.resultado = true;
  }
}

enum Frutas{
  manzana = "Manazana",
  pera = "Pera",
  platano = "Plátano",
  uva = "Uva",
  coco = "Coco"
}
