import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModificarCursoComponent } from './modificar-curso/modificar-curso.component';
import { ListadoCursosComponent } from './listado-cursos/listado-cursos.component';

const routes: Routes = [{path: "", component: ListadoCursosComponent, children:
   //con params
   //{path: "modificar/:id/:nombre/:duracion/:nivel", component: ModificarCursoComponent}
  [{path: "modificar", component: ModificarCursoComponent},
   {path: "alta", component: ModificarCursoComponent}]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
