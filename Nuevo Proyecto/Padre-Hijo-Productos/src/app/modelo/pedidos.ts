export class Pedidos{
    public static cont = 0;
    public idPedidos:number;
    public static contCl = 0
    public idClientes:number;
    public nombreCliente:string;
    public totalProductos:number;
    public importeTotal:number;

    constructor(nombreCliente:string, totalProductos:number, importeTotal:number){
        this.idPedidos = Pedidos.cont++,
        this.idClientes = Pedidos.contCl++,
        this.nombreCliente = nombreCliente,
        this.totalProductos = totalProductos;
        this.importeTotal = importeTotal;
    }
}