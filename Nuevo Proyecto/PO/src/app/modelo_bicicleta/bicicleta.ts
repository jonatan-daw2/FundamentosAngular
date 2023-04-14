export class Bicicleta{
    public color: string = "";
    public marca: string = "";
    public velocidad: number = 0;
    public piniones: number = 0;
    public platos: number = 0;
    public electrica:boolean = false;

    constructor(color:string, mar:string, piniones:number, platos:number, elec:boolean){
        this.color = color;
        this.marca = mar;
        this.piniones = piniones;
        this.platos = platos;
        this.electrica = elec;
        this.velocidad = 0;
    }

    acelerar(aumento:number){
        this.velocidad = this.velocidad + aumento;
    }

    frenar(disminucion:number){
        if(this.velocidad > 0){
            this.velocidad = this.velocidad - disminucion;
        }
        if(this.velocidad < 0){
            this.velocidad = 0;
        }
    }

    /*public get biciColor(): string {
        return this.color;
    }
    public set biciColor(value: string) {
        this.color = value;
    }

    public get biciMarca(): string {
        return this.marca;
    }
    public set biciMarca(value: string) {
        this.marca = value;
    }

    public get biciVelocidad(): number {
        return this.velocidad;
    }
    public set biciVelocidad(value: number) {
        this.velocidad = value;
    }

    public get biciPiniones(): number {
        return this.piniones;
    }
    public set biciPiniones(value: number) {
        this.piniones = value;
    }

    public get biciPlatos(): number {
        return this.platos;
    }
    public set biciPlatos(value: number) {
        this.platos = value;
    }

    public get biciElectrica(): boolean {
        return this.electrica;
    }
    public set biciELectrica(value: boolean) {
        this.electrica = value;
    }*/

    mostrarBici(){

        let esElectrica = "  Electrica: "+ this.electrica;
        let mensaje = "Bicicleta: "+ this.marca+ "." + "\n Color: "+ this.color+
                      "."+ "\n Piñones: "+ this.piniones+ "."+ "\n Platos: "+
                      this.platos+ ". \n"+ esElectrica +
                      "\n Velocidad: "+ this.velocidad+ "km/h";
        return mensaje;
    }
}

