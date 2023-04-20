import { Injectable } from '@angular/core';
import { Cursos, Nivel } from '../modelo/cursos';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private curso1 = new Cursos("JavaScript",50,Nivel.Intermedio);
  private curso2 = new Cursos("PHP",50,Nivel.Intermedio);
  private curso3 = new Cursos("Bootstrap",50,Nivel.Intermedio);
  private curso4 = new Cursos("Angular",80,Nivel.Avanzado);
  private curso5 = new Cursos("TypeScript",80,Nivel.Avanzado);
  private cursos: Cursos[]=[this.curso1,this.curso2,this.curso3,this.curso4,this.curso5];
  constructor() { }

  getCursos(){
    return this.cursos;
  }

  modificar(idCurso:number,nombre:string,duracion:number,nivel:Nivel){
    for (let i = 0; i < this.cursos.length; i++) {
      if(this.cursos[i].id == idCurso){
        this.cursos[i].nombre = nombre;
        this.cursos[i].duracion = duracion;
        this.cursos[i].nivel = nivel;
      }
    }
  }
}
