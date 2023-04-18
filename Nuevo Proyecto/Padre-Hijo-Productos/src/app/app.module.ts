import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PadreComponent } from './padre/padre.component';
import { FormsModule } from '@angular/forms';
import { HijoComponent } from './hijo/hijo.component';
import { HijoPedidoComponent } from './hijo-pedido/hijo-pedido.component';
import { PadrePedidoComponent } from './padre-pedido/padre-pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    PadreComponent,
    HijoComponent,
    HijoPedidoComponent,
    PadrePedidoComponent
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
