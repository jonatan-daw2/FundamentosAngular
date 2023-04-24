import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-envio-id',
  templateUrl: './envio-id.component.html',
  styleUrls: ['./envio-id.component.css']
})
export class EnvioIdComponent {
  id:number = 1;
  accion:string = "correr";
  constructor(private router:Router){

  }

  enviarId(id:number){
    this.router.navigate(["/recibe",id]);
  }

  enviarParametros(){
    this.router.navigate(["recepcionVarios"],{queryParams:{accion:this.accion,id:this.id}});
  }
}
