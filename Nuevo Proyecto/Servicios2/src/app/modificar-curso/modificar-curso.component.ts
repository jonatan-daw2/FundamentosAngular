import { Component } from '@angular/core';
import { ServicioService } from '../services/servicio.service';
import { Nivel } from '../modelo/cursos';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-modificar-curso',
  templateUrl: './modificar-curso.component.html',
  styleUrls: ['./modificar-curso.component.css']
})
export class ModificarCursoComponent {
  nivelesArray:Nivel[];
  nombre:string = "";
  duracion:number = 0;
  nivel:Nivel = Nivel.Basico;
  id:number = 0;

  constructor(private CursosServicio:ServicioService, private route:ActivatedRoute){
    this.nivelesArray = [Nivel.Basico,Nivel.Intermedio,Nivel.Avanzado,Nivel.Experto];
    this.route.params.subscribe(params => (this.id = params['id']));
  }

  modificar(){
    this.CursosServicio.modificar(this.id,this.nombre,this.duracion, this.nivel);
  }
}
