import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactarComponent } from './contactar/contactar.component';
import { AltaComponent } from './facturas/alta.component';

const routes: Routes = [{path: "contactar", component: ContactarComponent},
{path: "", component: InicioComponent},
{path: "quienes-somos", component: QuienesSomosComponent},
{path: "facturas", component: AltaComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
