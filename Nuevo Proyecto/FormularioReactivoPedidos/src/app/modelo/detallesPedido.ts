export class DetallesPedido{
    idPedido:number;
    idProducto:number;
    cantidad:number;

    constructor(idPedido:number,idProdcuto:number=0,cantidad:number=0){
        this.idPedido = idPedido;
        this.idProducto = idProdcuto;
        this.cantidad = cantidad;
    }
}