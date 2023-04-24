import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recepcion-multiple',
  templateUrl: './recepcion-multiple.component.html',
  styleUrls: ['./recepcion-multiple.component.css']
})
export class RecepcionMultipleComponent {
  id:number = 0;
  accion:string = "";
  constructor(private router:ActivatedRoute){
    this.accion = this.router.snapshot.queryParams["accion"];
    this.id = this.router.snapshot.queryParams["id"];
  }
}
