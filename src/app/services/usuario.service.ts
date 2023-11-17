import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  url: string = 'http://localhost:8087/api/v1/usuario';

  constructor(private httpClient: HttpClient) { }

  async salvar(usuario: Usuario) {
    if (usuario.idUsuario === 0) {
      //cria um usuario
      return await this.httpClient.post(this.url, JSON.stringify(usuario), this.httpHeaders).toPromise();
    } else {
      //atualiza um usuario
      return await this.httpClient.put(this.url, JSON.stringify(usuario), this.httpHeaders).toPromise();
    }
  }

  async excluir(id: number) {
    let urlAuxiliar = this.url + "/" + id;
    //deleta o usuarioto
    return await this.httpClient.delete(urlAuxiliar).toPromise();
  }

  async listar() {
    //listar todos os usuariotos
    return await this.httpClient.get(this.url).toPromise();
  }

  async buscarPorId(id: number) {
    let urlAuxiliar = this.url + "/" + id;
    return await this.httpClient.get(urlAuxiliar).toPromise();
  }

  async verificarEmail(email: string) {
    let urlAuxiliar = this.url + "/" + email + '/exists';
    return await this.httpClient.get(urlAuxiliar).toPromise();
  }

  async autenticarUsuario(email: string, senha: string) {
    let urlAuxiliar = this.url + "/" + email + "/" + senha + '/authenticate';
    return await this.httpClient.get(urlAuxiliar).toPromise();
  }

  async recuperarEmail(email: string) {
    let urlAuxiliar = this.url + "/" + email + "/recover";
    return await this.httpClient.get(urlAuxiliar).toPromise();
  }

}
