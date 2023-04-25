import { Injectable } from '@angular/core';
import { Cursos, Nivel } from '../modelo/cursos';
import { Router } from '@angular/router';


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
  constructor(private router:Router) { }

  getCursos(){
    return this.cursos;
  }

  modificar(idCurso:number,nombre:string,duracion:number,nivel:Nivel){
    for (let i = 0; i < this.cursos.length; i++) {
      if(this.cursos[i].id == idCurso){
        //alert("entro");
        if(duracion==null || duracion <= 0){
          //alert("xd");
          alert("La duración del curso no es correcta. La duración ha de ser mayor a 0.");
        }else{
          this.cursos[i].nombre = nombre;
          this.cursos[i].duracion = duracion;
          this.cursos[i].nivel = nivel;
          this.router.navigate([""]);
        }
      }
    }
  }

  alta(nombre:string,duracion:number,nivel:Nivel){
    if(nombre=="" || duracion==null ||duracion<=0 || nivel==null){
      alert("Rellena todos los campos correctamente");
    }else{
      let curso_nuevo = new Cursos(nombre,duracion,nivel);
      this.cursos.push(curso_nuevo);
      this.router.navigate([""]);
    }
  }
}
