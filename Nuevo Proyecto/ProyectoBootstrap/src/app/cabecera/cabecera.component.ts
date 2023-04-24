import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {

  constructor(private router:Router){

  }

  irCarousel(){
    this.router.navigate([""]);
  }
  irFormulario(){
    this.router.navigate(["formulario"]);
  }
  irHabilidades(){
    this.router.navigate(["habilidades"]);
  }
  irBlog(){
    this.router.navigate(["blog"]);
  }
}
