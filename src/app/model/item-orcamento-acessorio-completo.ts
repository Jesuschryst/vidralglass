import { Acessorio } from "./acessorio";
import { ItemOrcamentoAcessorio } from "./item-orcamento-acessorio";

export class ItemOrcamentoAcessorioCompleto {
    id: number;
    itemOrcamentoAcessorio: ItemOrcamentoAcessorio;
    acessorio: Acessorio;

    constructor(){
        this.id = 0;
        this.itemOrcamentoAcessorio = new ItemOrcamentoAcessorio();
        this.acessorio = new Acessorio();
    }
}
