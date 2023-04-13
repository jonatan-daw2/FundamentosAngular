import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AplicacionComponent } from './aplicacion/aplicacion.component';
import { DivisasComponent } from './divisas/divisas.component';

@NgModule({
  declarations: [
    AppComponent,
    AplicacionComponent,
    DivisasComponent
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
