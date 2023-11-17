export class ItemVenda {
    id!: number;
    nome!: string;
    imagem!: string;
    descricao!: string;
    quantidade!: number;
    valorItem!: string;
    observacao!: string;
    largura!: string;
    altura!: string;
    unidade!: string;
    valorM2!: string;
    valorEspessura!: string;
    valorFolha!: string;
    idVenda!: number;

    constructor(){
        this.id = 0;
        this.nome = "";
        this.imagem = "";
        this.descricao = "";
        this.quantidade = 0;
        this.valorItem = "";
        this.observacao = "";
        this.largura = "";
        this.altura = "";
        this.unidade = "";
        this.valorM2 = "";
        this.valorEspessura = "";
        this.valorFolha = "";
        this.idVenda = 0;
    }
    
}
