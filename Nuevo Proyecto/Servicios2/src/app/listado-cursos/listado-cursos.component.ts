import { Component } from '@angular/core';
import { ServicioService } from '../services/servicio.service';
import { Cursos } from '../modelo/cursos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-cursos',
  templateUrl: './listado-cursos.component.html',
  styleUrls: ['./listado-cursos.component.css']
})
export class ListadoCursosComponent {
  cursosArray:Cursos[];
  //nivelesArray:Nivel[];
  
  constructor(private CursosServicio:ServicioService, private router:Router){
    this.cursosArray = this.CursosServicio.getCursos();
    //this.nivelesArray = [Nivel.Basico,Nivel.Intermedio,Nivel.Avanzado,Nivel.Experto];
  }
}
