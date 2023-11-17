import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Orcamento } from '../model/orcamento';

@Injectable({
  providedIn: 'root'
})
export class OrcamentoService {

  httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  url: string = 'http://localhost:8087/api/v1/orcamento';


  constructor(private httpClient: HttpClient) { }

  // salvar(orcamento: Orcamento) {
  //   let orcamentos = JSON.parse(localStorage.getItem('orcamentos') || '[]');

  //   if (orcamento.id === 0) {
  //     orcamento.id = Math.floor(Math.random() * 65536)
  //     orcamentos.push(orcamento);
  //   } else {
  //     let posicao = orcamentos.findIndex((Elemento: Orcamento) => Elemento.id === orcamento.id);
  //     orcamentos[posicao] = orcamento;
  //   }

  //   localStorage.setItem('orcamentos', JSON.stringify(orcamentos));
  //   return orcamento;

  // }

  // buscarPorId(id: number) {

  //   let orcamentos = JSON.parse(localStorage.getItem('orcamentos') || '[]');

  //   let orcamento = new Orcamento();
  //   orcamento = orcamentos.find((Elemento: Orcamento) => Elemento.id === id);
  //   return orcamento;

  // }

  // buscarCliente(id: number) {
  //   let orcamentos = JSON.parse(localStorage.getItem('orcamentos') || '[]');

  //   let orcamento = new Orcamento();
  //   orcamento = orcamentos.find((Elemento: Orcamento) => Elemento.idCliente === id);
  //   return Number(orcamento.idCliente);

  // }


  // listarOrcamentos() {
  //   let orcamentos = JSON.parse(localStorage.getItem('orcamentos') || '[]');
  //   return orcamentos;
  // }

  // excluir(id: number) {
  //   let orcamentos = JSON.parse(localStorage.getItem('orcamentos') || '[]');
  //   let tam = orcamentos.lenght;

  //   orcamentos = orcamentos.filter((Elemento: Orcamento) => Elemento.id !== id);

  //   localStorage.setItem('orcamentos', JSON.stringify(orcamentos));

  //   if (tam === orcamentos.length) {
  //     return 0;
  //   } else {
  //     return 1;
  //   }

  // }

  async Salvar(orcamento: Orcamento) {
    if (orcamento.idOrcamento === 0) {
      console.log(orcamento.idCliente);
      return await this.httpClient.post(this.url, JSON.stringify(orcamento), this.httpHeaders).toPromise();
    } else {
      return await this.httpClient.put(this.url, JSON.stringify(orcamento), this.httpHeaders).toPromise();
    }

  }

  async listarOrcamentos() {
    return await this.httpClient.get(this.url).toPromise();
  }

  async excluir(id: number) {
    let urlAuxiliar = this.url + "/" + id;
    return await this.httpClient.delete(urlAuxiliar).toPromise();

  }

  async buscarPorId(id: number) {
    let urlAuxiliar = this.url + "/" + id;
    return await this.httpClient.get(urlAuxiliar).toPromise();
  } 

  async buscarPorIdCliente(id: number) {
    let urlAuxiliar = this.url + "/cliente" + "/" + id;
    return await this.httpClient.get(urlAuxiliar).toPromise();
  } 
}
