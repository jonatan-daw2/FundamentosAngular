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
  mostrar:number = 0;
  
  constructor(private servicio:ServicioAlumnosService, private router:Router){

  }

  ngOnInit(): void {
    this.servicio.mostrar().subscribe(data=>{this.listado = data});
  }

  modificar(id:number,dni:string,nombre:string,horas:number){
    console.log(this.mostrar+ " "+ id+ " "+ dni+ " "+ nombre+ " "+ horas);
    this.router.navigate(["modificar"],{queryParams:{mostrar:this.mostrar=1,id:id,dni:dni,nombre:nombre,horas:horas}});
  }

  buscar(){
    
    console.log(this.mostrar);
    this.router.navigate(["buscar"],{queryParams:{mostrar:this.mostrar=0}});
  }

  alta(){
    console.log(this.mostrar);
    this.router.navigate(["alta"],{queryParams:{mostrar:this.mostrar=2}});
  }
}
