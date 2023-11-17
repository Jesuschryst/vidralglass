export class ItemOrcamento {
    idItemOrcamento: number;
    tipo: string
    nome: string;
    valorItem: number;
    valorTotal: number;
    quantidade: number;
    observacao: string;
    largura: string;
    altura: string;
    unidade: string;
    valorM2: string;
    espessura: string;
    cor: string;
    idOrcamento: number;

    constructor(){
        this.idItemOrcamento = 0;
        this.tipo = "";
        this.nome = "";
        this.valorItem = 0;
        this.valorTotal = 0;
        this.quantidade = 0;
        this.observacao = "";
        this.largura = "";
        this.altura = "";
        this.unidade = "";
        this.valorM2 = "";
        this.espessura = "";
        this.cor = "";
        this.idOrcamento = 0;
     }
}
