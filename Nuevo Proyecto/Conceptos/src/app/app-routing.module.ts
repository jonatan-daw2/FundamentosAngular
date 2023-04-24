import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteServicioComponent } from './componente-servicio/componente-servicio.component';
import { EventoComponent } from './evento/evento.component';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { OneWayBidingComponent } from './one-way-biding/one-way-biding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { EnvioIdComponent } from './envio-id/envio-id.component';
import { RecibeIdComponent } from './recibe-id/recibe-id.component';
import { RecepcionMultipleComponent } from './recepcion-multiple/recepcion-multiple.component';
import { PadreHijoDadComponent } from './padre-hijo-dad/padre-hijo-dad.component';
import { HijoPadreDadComponent } from './hijo-padre-dad/hijo-padre-dad.component';

const routes: Routes = [{path: "interpolacion", component: InterpolacionComponent},
{path: "servicio", component: ComponenteServicioComponent},
{path: "evento", component: EventoComponent},
{path: "oneWay", component: OneWayBidingComponent},
{path: "twoWay", component: TwoWayBindingComponent},
{path: "directivas", component: DirectivasComponent},
{path: "envio", component: EnvioIdComponent},
{path: "recibe/:id", component: RecibeIdComponent},
{path: "recepcionVarios", component: RecepcionMultipleComponent},
{path: "padreHijo", component: PadreHijoDadComponent},
{path: "hijoPadre", component: HijoPadreDadComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
