import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';
import { BlogComponent } from './blog/blog.component';
import { FormularioComponent } from './formulario/formulario.component';
import { HablidadesComponent } from './hablidades/hablidades.component';

@NgModule({
  declarations: [
    AppComponent,
    CarrouselComponent,
    CabeceraComponent,
    PieComponent,
    BlogComponent,
    FormularioComponent,
    HablidadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
