import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicioService } from './services/servicio.service';
import { AltaComponent } from './facturas/alta.component';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './inicio/inicio.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactarComponent } from './contactar/contactar.component';

@NgModule({
  exports:[AltaComponent],
  declarations: [
    AppComponent,
    AltaComponent,
    InicioComponent,
    QuienesSomosComponent,
    ContactarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }

