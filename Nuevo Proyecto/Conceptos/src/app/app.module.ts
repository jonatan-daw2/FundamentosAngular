import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { OneWayBidingComponent } from './one-way-biding/one-way-biding.component';
import { EventoComponent } from './evento/evento.component';
import { FormsModule } from '@angular/forms';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { ComponenteServicioComponent } from './componente-servicio/componente-servicio.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { EnvioIdComponent } from './envio-id/envio-id.component';
import { RecibeIdComponent } from './recibe-id/recibe-id.component';
import { RecepcionMultipleComponent } from './recepcion-multiple/recepcion-multiple.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolacionComponent,
    OneWayBidingComponent,
    EventoComponent,
    TwoWayBindingComponent,
    ComponenteServicioComponent,
    DirectivasComponent,
    EnvioIdComponent,
    RecibeIdComponent,
    RecepcionMultipleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
