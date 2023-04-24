import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioBasicoService {
  private _mensaje: string = "";

  constructor() { 
  }

  public get mensaje(): string {
    return this._mensaje = "Funcion llamada desde el servicio: Hola Mundo";
  }
}
