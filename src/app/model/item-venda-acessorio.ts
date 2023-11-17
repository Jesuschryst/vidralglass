export class ItemVendaAcessorio {
    id!: number;
    valor!: string;
    quantidade!: number;
    iditemVenda!: number;
    idAcessorio!: number;


    constructor(){
        this.id = 0;        
        this.valor = "";
        this.quantidade = 0;
        this.iditemVenda = 0;
        this.idAcessorio = 0;
    }
}
