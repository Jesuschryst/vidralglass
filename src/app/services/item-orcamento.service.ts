import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ItemOrcamento } from '../model/item-orcamento';
import { OrcamentoService } from './orcamento.service';

@Injectable({
  providedIn: 'root'
})
export class ItemOrcamentoService {
  httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  url: string = 'http://localhost:8087/api/v1/itemorcamento';

  constructor(private httpClient: HttpClient) { 
  }

  // salvar(itemorcamento: ItemOrcamento) {
  //   let itemorcamentos = JSON.parse(localStorage.getItem('itemorcamentos') || '[]');

  //   if(itemorcamento.id === 0) {
  //     itemorcamento.id = Math.floor(Math.random() * 65536)
  //     itemorcamentos.push(itemorcamento);
  //   } else {
  //     let posicao = itemorcamentos.findIndex((Elemento: ItemOrcamento) => Elemento.id === itemorcamento.id);
  //     itemorcamentos[posicao] = itemorcamento;
  //   }

  //   localStorage.setItem('itemorcamentos', JSON.stringify(itemorcamentos));
  //   return itemorcamento;

  // }

  // buscarPorId(id: number) {
    
  //   let itemorcamentos = JSON.parse(localStorage.getItem('itemorcamentos') || '[]');

  //   let itemorcamento = new ItemOrcamento();
  //   itemorcamento = itemorcamentos.find((Elemento: ItemOrcamento) => Elemento.id === id);
  //   return itemorcamento;
  // }

  // listarItemOrcamento() {
  //   let itemorcamentos = JSON.parse(localStorage.getItem('itemorcamentos') || '[]');
  //   return itemorcamentos;
  // }

  // listarItemOrcamentoPorIdOrcamento(id: number) {
  //   let itemorcamentos = JSON.parse(localStorage.getItem('itemorcamentos') || '[]');
  //   console.log(itemorcamentos);

  //   let itensOrcamentos = itemorcamentos.filter(function(item: ItemOrcamento){
  //     console.log(item);
  //     return item.idOrcamento === id;
  //   });
  //   console.log(itensOrcamentos);

  //   return itensOrcamentos;
  // }

  // buscarIdOrcamento(id: number) {
  //   let itemorcamentos = JSON.parse(localStorage.getItem('itemorcamentos') || '[]');

  //   let itemorcamento = itemorcamentos.find((Elemento: ItemOrcamento) => Elemento.id === id);

  //   return itemorcamento.idOrcamento;

  // }

  // excluir(id: number) {
  //   let itemorcamentos = JSON.parse(localStorage.getItem('itemorcamentos') || '[]');
  //   let itemorcamentos2 = JSON.parse(localStorage.getItem('itemorcamentos') || '[]');

  //   let tam = itemorcamentos.lenght;

  //   itemorcamentos = itemorcamentos.filter((Elemento: ItemOrcamento) => Elemento.id !== id);
  //   let itemorcamentosExcluidos = itemorcamentos2.filter((Elemento: ItemOrcamento) => Elemento.id === id);

  //   let orcamento = this.orcamentoService.buscarPorId(itemorcamentosExcluidos[0].idOrcamento);
  //   orcamento.valorTotal = orcamento.valorTotal - itemorcamentosExcluidos[0].valorTotal;
  //   this.orcamentoService.salvar(orcamento);


  //   localStorage.setItem('itemorcamentos', JSON.stringify(itemorcamentos));

  //   if(tam === itemorcamentos.length) {
  //     return 0;
  //   } else {
  //     return 1;
  //   }
  // }

  // excluirComIdOrcamento(id: number) {
  //   let itemorcamentos = JSON.parse(localStorage.getItem('itemorcamentos') || '[]');
  //   let itemorcamentos2 = JSON.parse(localStorage.getItem('itemorcamentos') || '[]');


  //   itemorcamentos = itemorcamentos.filter((Elemento: ItemOrcamento) => Elemento.idOrcamento !== id);
  //   let itemorcamentosExcluidos = itemorcamentos2.filter((Elemento: ItemOrcamento) => Elemento.idOrcamento === id);

  //   localStorage.setItem('itemorcamentos', JSON.stringify(itemorcamentos));
  //   return itemorcamentosExcluidos[0].id;

  // }

  async Salvar(itemOrcamento: ItemOrcamento) {
    if (itemOrcamento.idItemOrcamento === 0) {
      return await this.httpClient.post(this.url, JSON.stringify(itemOrcamento), this.httpHeaders).toPromise();
    } else {
      return await this.httpClient.put(this.url, JSON.stringify(itemOrcamento), this.httpHeaders).toPromise();
    }

  }

  async listarItemOrcamento() {
    return await this.httpClient.get(this.url).toPromise();
  }

  async listarItemOrcamentoPorIdOrcamento(id: number) {
    let urlAuxiliar = this.url + "/orcamento" + "/listar" + "/" + id;
    return await this.httpClient.get(urlAuxiliar).toPromise();
  }

  async excluir(id: number) {
    let urlAuxiliar = this.url + "/" + id;
    return await this.httpClient.delete(urlAuxiliar).toPromise();

  }

  async excluirComIdOrcamento(id: number) {
    let urlAuxiliar = this.url + "/orcamento" + "/" + id;
    return await this.httpClient.delete(urlAuxiliar).toPromise();

  }

  async buscarPorId(id: number) {
    let urlAuxiliar = this.url + "/" + id;
    return await this.httpClient.get(urlAuxiliar).toPromise();
  } 

  async buscarPorIdOrcamento(id: number) {
    let urlAuxiliar = this.url + "/orcamento" + "/" + id;
    return await this.httpClient.get(urlAuxiliar).toPromise();
  } 

  async buscarIdPorIdOrcamento(id: number) {
    let urlAuxiliar = this.url + "/item" + "/" + id;
    return await this.httpClient.get(urlAuxiliar).toPromise();
  } 



}
