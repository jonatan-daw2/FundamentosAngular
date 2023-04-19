export class Facturas{
    public idFacturas:number;
    public idCliente:number;
    public static contFac = 0;
    public static contCl = 0;
    public totalFactura:number;
    public iva:number;

    constructor(totalFacturas:number, iva:number){
        this.totalFactura = totalFacturas;
        this.iva = iva;
        this.idFacturas = Facturas.contFac++;
        this.idCliente = Facturas.contCl++;
    }
}