import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent {

  constructor(private router:Router){

  }

  irFormulario(){
    this.router.navigate(["formulario"]);
  }
}
