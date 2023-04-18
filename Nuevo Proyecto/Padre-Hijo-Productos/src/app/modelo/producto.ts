import { tipoProducto } from "./enumerado";

tipoProducto
export class Producto{
    public static cont=0;
    public _id: number;
    public _nombre:string;
    public _precio:number;
    public _stock:number;
    public _tipo:tipoProducto;

    constructor(nombre:string, precio:number, stock:number, tipo:tipoProducto){
        this._nombre = nombre,
        this._precio = precio;
        this._stock = stock;
        this._id=++Producto.cont;
        this._tipo = tipo;
    }

    public get_id(): number {
        return this._id;
    }
    public set_id(value: number) {
        this._id = value;
    }

    public get_nombre(): string {
        return this._nombre;
    }
    public set_nombre(value: string) {
        this._nombre = value;
    }

    public get_precio(): number {
        return this._precio;
    }
    public set_precio(value: number) {
        this._precio = value;
    }

    public get_stock(): number {
        return this._stock;
    }
    public set_stock(value: number) {
        this._stock = value;
    }
}