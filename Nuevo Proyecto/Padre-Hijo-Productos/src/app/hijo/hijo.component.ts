import { Component,Input } from '@angular/core';
import { Producto } from '../modelo/producto';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  @Input() listadoProductos:Producto[]=[];
}
