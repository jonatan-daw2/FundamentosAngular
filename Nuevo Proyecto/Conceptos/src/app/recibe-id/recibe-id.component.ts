import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recibe-id',
  templateUrl: './recibe-id.component.html',
  styleUrls: ['./recibe-id.component.css']
})
export class RecibeIdComponent {
  id:number = 0;

  constructor(private router:ActivatedRoute){
    this.id = this.router.snapshot.params["id"];
  }
}
