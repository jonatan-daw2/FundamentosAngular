import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Alumnos } from '../modelo/alumno';
import { ActivatedRoute } from '@angular/router';
import { ServicioAlumnosService } from '../service/servicio-alumnos.service';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  contenido:FormGroup;
  id:number = 0;
  dni:string = "";
  nombre:string = "";
  horas:number = 0;
  mostrar:number = 0;
  
  busqueda:Alumnos;
  mensaje = "";

  constructor(private router:ActivatedRoute, private servicio:ServicioAlumnosService){
    
  }

  ngOnInit(): void {
    this.router.queryParams.subscribe(data=>{this.mostrar = data['mostrar'],
                                             this.id = data['id'],
                                             this.dni = data['dni'],
                                             this.nombre = data['nombre'],
                                             this.horas = data['horas']});
    this.contenido = new FormGroup({
      id: new FormControl(this.id),
      dni: new FormControl(this.dni),
      nombre: new FormControl(this.nombre),
      horas: new FormControl(this.horas)
    });
  }

  envio(){
    //console.log("Id: "+ this.contenido.value.id + ". Nombre: "+  this.contenido.value.nombre+ ". Dni: "+  this.contenido.value.dni+ ". Horas de formacion: "+  this.contenido.value.horas);
    if(this.mostrar==0){   
      this.servicio.buscar(this.contenido.value.id).subscribe(data=>{this.busqueda = data});
      if(this.busqueda != undefined){
        this.mensaje = "ID: "+ this.busqueda.id+ ". Dni: "+ this.busqueda.dni+ ". Nombre: "+ this.busqueda.nombre+". Horas: "+ this.busqueda.horasFormacion
      }else{
        this.mensaje = "No existe dicho alumno";
      }
    }else if(this.mostrar==1){
      console.log(this.id+ " "+this.contenido.value.dni+ " "+this.nombre+ " "+this.contenido.value.horas)
      this.servicio.modificar(this.id,this.contenido.value.dni,this.contenido.value.nombre,this.contenido.value.horas);
    }else if(this.mostrar==2){
      this.servicio.alta(this.contenido.value.dni,this.contenido.value.nombre,this.contenido.value.horas);
    }
  }
}
