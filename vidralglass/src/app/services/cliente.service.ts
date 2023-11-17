import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Cliente } from '../model/cliente';
import { Endereco } from '../model/endereco';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  url: string = 'http://localhost:8087/api/v1/cliente';
  url2: string = 'http://localhost:8087/api/v1/cliente/endereco';

  constructor(private httpClient: HttpClient) { }

  // Salvar(cliente: Cliente) {
  //   let clientes = JSON.parse(localStorage.getItem('clientes') || '[]');

  //   if(cliente.id === 0) {
  //     cliente.id = Math.floor(Math.random() * 65536);
  //     cliente.endereco.id = Math.floor(Math.random() * 65536);
  //     cliente.endereco.idCliente = cliente.id;
  //     clientes.push(cliente);
  //   } else {
  //     let posicao = clientes.findIndex((Elemento: Cliente) => Elemento.id === cliente.id);
  //     clientes[posicao] = cliente;
  //   }

  //   localStorage.setItem('clientes', JSON.stringify(clientes));
  //   return cliente;

  // }

  // listarCliente() {
  //   let clientes = JSON.parse(localStorage.getItem('clientes') || '[]');
  //   return clientes;
  // }

  // excluir(id: number) {
  //   let clientes = JSON.parse(localStorage.getItem('clientes') || '[]');
  //   let tam = clientes.lenght;

  //   clientes = clientes.filter((Elemento: Cliente) => Elemento.id !== id);

  //   localStorage.setItem('clientes', JSON.stringify(clientes));

  //   if(tam === ClienteService.length) {
  //     return 0;
  //   } else {
  //     return 1;
  //   }

  // }

  // buscarPorId(id: number) {
  //   let clientes = JSON.parse(localStorage.getItem('clientes') || '[]');

  //   let cliente = new Cliente();
  //   cliente = clientes.find((Elemento: Cliente) => Elemento.id === id);
  //   return cliente;

  // }

  async Salvar(cliente: Cliente) {
    if (cliente.idCliente === 0) {
      console.log(cliente.idCliente);
      return await this.httpClient.post(this.url, JSON.stringify(cliente), this.httpHeaders).toPromise();
    } else {
      return await this.httpClient.put(this.url, JSON.stringify(cliente), this.httpHeaders).toPromise();
    }

  }

  async salvarEnd(endereco: Endereco) {
    if (endereco.idEndereco === 0) {
      return await this.httpClient.post(this.url2, JSON.stringify(endereco), this.httpHeaders).toPromise();
    } else {
      return await this.httpClient.put(this.url2, JSON.stringify(endereco), this.httpHeaders).toPromise();
    }
  }

  async listarCliente() {
    return await this.httpClient.get(this.url).toPromise();
  }

  async excluir(id: number) {
    let urlAuxiliar = this.url + "/" + id;
    return await this.httpClient.delete(urlAuxiliar).toPromise();

  }

  async excluirEndereco(id: number) {
    let urlAuxiliar = this.url2 + "/" + id;
    return await this.httpClient.delete(urlAuxiliar).toPromise();
  }

  async buscarPorId(id: number) {
    let urlAuxiliar = this.url + "/" + id;
    return await this.httpClient.get(urlAuxiliar).toPromise();

  } 

}
