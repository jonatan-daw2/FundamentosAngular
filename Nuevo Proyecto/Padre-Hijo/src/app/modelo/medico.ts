export class Medico{
    public static cont=0;
    public id:number;
    public nombre:string="";
    public apellidos:string="";
    public cedula:number=0;
    public foto:string="";

    constructor(nombre:string, apellidos:string, cedula:number, foto:string){
        this.id=++Medico.cont;
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.cedula=cedula;
        this.foto=foto;
    }

    mostrar():string{
        return "Nombre: "+this.nombre+" Apellidos: "+this.apellidos+" Cedula: "+this.cedula+" Foto: "+this.foto;
    }
}