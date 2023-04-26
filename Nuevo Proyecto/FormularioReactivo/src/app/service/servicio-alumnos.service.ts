import { Injectable } from '@angular/core';
import { Alumnos } from '../modelo/alumno';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioAlumnosService {
  static contador:number = 5;
  private id:number = 0;
  alumnos:Alumnos[] = [{id:0,dni:"11856873M",nombre:"Jonatan",horasFormacion:10},{id:1,dni:"65634763L",nombre:"Francico",horasFormacion:22},
                       {id:2,dni:"45566447J",nombre:"Maria",horasFormacion:6},{id:3,dni:"34567965L",nombre:"Natalia",horasFormacion:8},
                       {id:4,dni:"23442355P",nombre:"Mike",horasFormacion:12}];

  constructor() {
  }

  mostrar():Observable<Alumnos[]>{
    return of(this.alumnos);
  }

  buscar(id:number):Observable<Alumnos>{
    return of(this.alumnos[this.alumnos.findIndex((p:Alumnos)=> p.id == id)]);
  }
  
  modificar(id:number,dni:string,nombre:string,horas:number){
    let indice = this.alumnos.findIndex((p:Alumnos) => p.id == id);
    console.log(indice);
    if(indice>=0){
      this.alumnos[indice].dni = dni;
      this.alumnos[indice].nombre = nombre;
      this.alumnos[indice].horasFormacion = horas;
      //console.log(dni);
    }
  }

  alta(dni:string,nombre:string,horas:number){
    this.id = ServicioAlumnosService.contador++;
    let alumnoAlta:Alumnos;
    this.alumnos.push(alumnoAlta = {id:this.id,dni:dni,nombre:nombre,horasFormacion:horas});
  }
}
