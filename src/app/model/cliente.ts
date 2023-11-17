import { Endereco } from "./endereco";

export class Cliente {
    idCliente!: number;
    nome!: string;
    cpf!: string;
    endereco!: Endereco;

    constructor(){
        this.idCliente = 0;
        this.nome = "";
        this.cpf = "";
        this.endereco = new Endereco();
    }
}
