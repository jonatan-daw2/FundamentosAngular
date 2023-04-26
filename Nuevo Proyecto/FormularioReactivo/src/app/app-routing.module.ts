import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ListadoAlumnosComponent } from './listado-alumnos/listado-alumnos.component';

const routes: Routes = [{path: "", component: ListadoAlumnosComponent, children:[
  {path: "modificar", component: FormularioComponent},
  {path: "buscar", component: FormularioComponent},
  {path: "alta", component: FormularioComponent}]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
