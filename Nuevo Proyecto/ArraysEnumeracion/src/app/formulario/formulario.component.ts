import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent{
      //ejemplo tipo de union
      multitipo:number|boolean = false;
      //array
      multitipo2: (number | string)[] = [1,2,3, "Hola mundo"];
      //string
      multittipo3: "a" | "b" = "a";

      //ejemplo aplicativo union de tipos en html
      id: number | string
      nombre: string;
      telefono: number | string;
      resultado = false;

      mostrar(){
        this.resultado = true;
      }
      //------------------------------------------------
      //enumeraciones 
      coche: TipoDeCoche = TipoDeCoche.Ford;
      cochesEnumerado:string[] = [TipoDeCoche.Ford,TipoDeCoche.Mercedes,TipoDeCoche.Honda,TipoDeCoche.Renault];
      
}

//enumerado
enum TipoDeCoche{
  Honda = "Honda",
  Mercedes = "Mercedes",
  Renault = "Renault",
  Ford = "Ford-Focus"
}

