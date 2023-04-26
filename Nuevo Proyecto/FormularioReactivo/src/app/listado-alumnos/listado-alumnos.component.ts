import { Component,OnInit } from '@angular/core';
import { ServicioAlumnosService } from '../service/servicio-alumnos.service';
import { Alumnos } from '../modelo/alumno';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-alumnos',
  templateUrl: './listado-alumnos.component.html',
  styleUrls: ['./listado-alumnos.component.css']
})
export class ListadoAlumnosComponent implements OnInit{
  listado:Alumnos[]=[];
  mostrar:number = -1;
  
  constructor(private servicio:ServicioAlumnosService, private router:Router){

  }

  ngOnInit(): void {
    this.servicio.mostrar().subscribe(data=>{this.listado = data});
  }

  modificar(mostrar:number,id:number,dni:string,nombre:string,horas:number){
    this.router.navigate(["modificar"],{queryParams:{mostrar:mostrar=1,id:id,dni:dni,nombre:nombre,horas:horas}});
  }

  buscar(mostrar:number){
    this.router.navigate(["buscar"],{queryParams:{mostrar:mostrar=0}});
  }

  alta(mostrar:number){
    this.router.navigate(["alta"],{queryParams:{mostrar:mostrar=2}});
  }
}
