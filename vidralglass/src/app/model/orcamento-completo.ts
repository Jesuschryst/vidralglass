import { Cliente } from "./cliente";
import { Orcamento } from "./orcamento";

export class OrcamentoCompleto {
    id!: number;
    orcamento!: Orcamento;
    cliente: Cliente;

    constructor() {
        this.id = 0;
        this.cliente = new Cliente;
    }

}
