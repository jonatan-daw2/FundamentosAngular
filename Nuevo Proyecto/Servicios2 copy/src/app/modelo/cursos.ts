export class Cursos{
    public id:number;
    static cont:number = 0;
    public nombre:string;
    public duracion:number = 0;
    public nivel:Nivel;

    constructor(nombre:string, duracion:number, nivel:Nivel){
        this.id = Cursos.cont++;
        this.nombre = nombre;
        this.duracion = duracion;
        this.nivel = nivel;
    }
}

export enum Nivel{
    Basico = "Basico",
    Intermedio = "Intermedio",
    Avanzado = "Avanzado",
    Experto = "Experto"
}