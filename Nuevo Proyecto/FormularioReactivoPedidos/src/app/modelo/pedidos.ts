export class Pedidos{
    idPedido:number;
    static cont:number = 0;
    idCliente:number;
    formaPago:string;
    direccion:String;

    constructor(idCliente:number,formaPago:string,direccion:string){
        this.idCliente = idCliente;
        this.formaPago = formaPago;
        this.direccion = direccion;
        this.idPedido = Pedidos.cont++;
    }
}