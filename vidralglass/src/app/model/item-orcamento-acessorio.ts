export class ItemOrcamentoAcessorio {
    idItemOrcamentoAcessorio!: number;
    valor!: number;
    quantidade!: number;
    iditemOrcamento!: number;
    idAcessorio!: number;
    valorTotal: number;


    constructor(){
        this.idItemOrcamentoAcessorio = 0;        
        this.valor = 0;
        this.quantidade = 0;
        this.iditemOrcamento = 0;
        this.idAcessorio = 0;
        this.valorTotal = 0;
    }
}
