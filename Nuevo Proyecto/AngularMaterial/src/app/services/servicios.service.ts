import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Opciones } from '../modelo/menu';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  private _menu: Opciones[] = [new Opciones("face", "Face", "option1"),
                               new Opciones("fingerprint", "Finger", "option2"),
                               new Opciones("invert_colors", "Colors", "option3"),
                               new Opciones("language", "Languaje", "option4"),
                               new Opciones("note_add", "Opacity", "option5")];


  constructor(private router:Router) { 

  }

  opcion(ruta:string){
    this.router.navigate([ruta]);
  }

  public get menu(): Opciones[] {
    return this._menu;
  }
}
