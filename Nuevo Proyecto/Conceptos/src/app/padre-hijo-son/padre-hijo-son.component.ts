import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-padre-hijo-son',
  templateUrl: './padre-hijo-son.component.html',
  styleUrls: ['./padre-hijo-son.component.css']
})
export class PadreHijoSonComponent {
  @Input() mensajeRecibido:string[] = [];
}
