export class Orcamento {
    idOrcamento!: number;
    dataOrcamento!: string;
    dataValidade!: string;
    valorTotal!: number;
    status!: string;
    idUsuario!: number;
    idCliente!: number;

    constructor(){
        this.idOrcamento = 0;
        this.dataOrcamento = "";
        this.dataValidade = "";
        this.valorTotal = 0;
        this.status = "";
        this.idUsuario = 0;
        this.idCliente = 0;
    }
}
