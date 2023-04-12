import { Component } from '@angular/core';

@Component({
  selector: 'app-cuarto-componente',
  templateUrl: './cuarto-componente.component.html',
  styleUrls: ['./cuarto-componente.component.css']
})
export class CuartoComponenteComponent {
  titulo:string = "Data biding";
  contador:number = 0;
  constructor(){

  }

  ngOnInit(): void{
    //this.interpolacion();
  }

  evento(){
    this.contador++;
  }

  /*interpolacion(){
    let nombre = "Usuario"
    let apellido = "Desconocido";
    let texto = `hola ${nombre}, ${apellido}`;
    alert(texto);
  }*/
}
