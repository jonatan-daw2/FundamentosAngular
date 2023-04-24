import { Component } from '@angular/core';

@Component({
  selector: 'app-one-way-biding',
  templateUrl: './one-way-biding.component.html',
  styleUrls: ['./one-way-biding.component.css']
})
export class OneWayBidingComponent {
  titulo:string = "Data biding";
  color:string = "red";

  evento(){
    if(this.color === "red"){
      this.color = "blue";
    }else{
      this.color = "red";
    }
  }
}
