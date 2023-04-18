import { Component } from '@angular/core';
import { Bicicleta } from '../modelo_bicicleta/bicicleta';

@Component({
  selector: 'app-bicicleta',
  templateUrl: './bicicleta.component.html',
  styleUrls: ['./bicicleta.component.css']
})
export class BicicletaComponent {
  datos:boolean = false
  acelera:number = 0;
  frena:number = 0;
  bicicleta = new Bicicleta("","",0,0,false);
  constructor(){
  }

  ngOnInit(){

  }
  
  mostrar() {
    this.bicicleta.color;
    this.bicicleta.marca;
    this.bicicleta.piniones;
    this.bicicleta.platos;
    this.bicicleta.electrica;
    this.datos = true;
  }

  aumentar(){
    let aumento = this.bicicleta.acelerar(this.acelera);
    return aumento;
  }

  disminuir(){
    let disminucion = this.bicicleta.frenar(this.frena);
    return disminucion;
  }
}
