export class Usuario {
    idUsuario!: number;
    login!: string;
    senha!: string;

    constructor(){
        this.idUsuario = 0;
        this.login = "";
        this.senha = "";
    }
}
