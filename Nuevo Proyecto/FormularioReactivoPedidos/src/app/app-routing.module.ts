import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioDatosPedidoComponent } from './formulario-datos-pedido/formulario-datos-pedido.component';
import { FormularioDetallePedidosComponent } from './formulario-detalle-pedidos/formulario-detalle-pedidos.component';

const routes: Routes = [{path: "", component: FormularioDatosPedidoComponent, children:[
                        {path: "formularioDetalles", component: FormularioDetallePedidosComponent}]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
