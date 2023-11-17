export class Venda {
    id!: number;
    status!: string;
    dataVenda!: Date;
    dataEntrega!: Date;

    constructor(){
        this.id = 0;
        this.status = "";
        //this.dataVenda = Date();
        //this.dataEntrega = Date();
        
        }
}
