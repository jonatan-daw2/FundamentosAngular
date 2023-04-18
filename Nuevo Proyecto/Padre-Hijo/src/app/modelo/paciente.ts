export class Paciente{
    public static cont=0;
    public id:number;
    public nombre:string="";
    public apellidos:string="";

    constructor(nombre:string, apellidos:string){
        this.id=++Paciente.cont;
        this.nombre=nombre;
        this.apellidos=apellidos;
    }

    mostrar():string{
        return "Nombre: "+this.nombre+" Apellidos: "+this.apellidos;
    }
}