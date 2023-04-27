import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FormularioDatosPedidoComponent } from './formulario-datos-pedido/formulario-datos-pedido.component';
import { FormularioDetallePedidosComponent } from './formulario-detalle-pedidos/formulario-detalle-pedidos.component';
import { ServicioPedidosService } from './service/servicio-pedidos.service';

@NgModule({
  declarations: [
    AppComponent,
    FormularioDatosPedidoComponent,
    FormularioDetallePedidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ServicioPedidosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
