export class Endereco {
    idEndereco!: number;
    rua!: string;
    cidade!: string;
    bairro!: string;
    numero!: number;
    complemento!: string;
    idCliente!: number;

    constructor(){
        this.idEndereco = 0;
        this.rua = "";
        this.cidade = "";
        this.bairro = "";
        this.numero = 0;
        this.complemento = "";
        this.idCliente = 0;
    }
}
