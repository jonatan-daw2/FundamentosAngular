import { Component } from '@angular/core';
import { ServicioService } from '../services/servicio.service';
import { Nivel } from '../modelo/cursos';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modificar-curso',
  templateUrl: './modificar-curso.component.html',
  styleUrls: ['./modificar-curso.component.css']
})
export class ModificarCursoComponent {
  nivelesArray:Nivel[];
  nombre:string = "";
  duracion:number = 0;
  nivel:Nivel = Nivel.Intermedio;
  id:number = -1;

  constructor(private CursosServicio:ServicioService, private route:ActivatedRoute, private router:Router){
    this.nivelesArray = [Nivel.Basico,Nivel.Intermedio,Nivel.Avanzado,Nivel.Experto];
    /*this.id = this.route.snapshot.queryParams["id"];
    this.nombre = this.route.snapshot.queryParams["nombre"];
    this.duracion = this.route.snapshot.queryParams["duracion"];
    this.nivel = this.route.snapshot.queryParams["nivel"];*/
   
  }

  ngOnInit(){
    //alert("Al dar de alta la ID no es necesaria rellenarla");
    //Con params
    /*this.route.params.subscribe(data=>{this.id = data['id'];
    this.nombre = data['nombre'];
    this.duracion = data['duracion'];
    this.nivel = data['nivel'];})*/
    this.route.queryParams.subscribe(data=>{this.id = data['id'];
                                       this.nombre = data['nombre'];
                                       this.duracion = data['duracion'];
                                       this.nivel = data['nivel'];})
  }
  
  modificar(){
    this.CursosServicio.modificar(this.id,this.nombre,this.duracion, this.nivel);
  }

  alta(){
    this.CursosServicio.alta(this.nombre,this.duracion,this.nivel);
  }
}
