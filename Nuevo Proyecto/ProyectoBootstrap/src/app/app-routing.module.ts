import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { FormularioComponent } from './formulario/formulario.component';
import { BlogComponent } from './blog/blog.component';
import { HablidadesComponent } from './hablidades/hablidades.component';

const routes: Routes = [{path: "", component: CarrouselComponent},
{path: "formulario", component: FormularioComponent},
{path: "blog", component: BlogComponent},
{path: "habilidades", component: HablidadesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
