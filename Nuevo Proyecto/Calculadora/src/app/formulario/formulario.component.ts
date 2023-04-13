import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  titulo:string = "Datos de compra";
  email: string = '';
  direccion: string = '';
  telefono: string = '';
  pago: string = 'Efectivo';
  informacion:boolean = false;
  banderaMuestra:boolean = false;
  comunidades: string[]= ["Madrid","Cataluña","Andalucía","Galicia","País Vasco","Aragón","Asturias","Canarias","Cantabria","Castilla y León","Castilla-La Mancha","Extremadura","Islas Baleares","La Rioja","Navarra","Comunidad Valenciana","Ceuta","Melilla"];
  comuni: string = this.comunidades[0];

  constructor(){
  }

  ngOnInit(): void{
    this.mostrar();
  }

  mostrar(){
    this.banderaMuestra = !this.banderaMuestra;
  }
}
