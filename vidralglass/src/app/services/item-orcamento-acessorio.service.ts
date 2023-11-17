import { Injectable } from '@angular/core';
import { ItemOrcamentoAcessorio } from '../model/item-orcamento-acessorio';
import { ItemOrcamentoService } from './item-orcamento.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { OrcamentoService } from './orcamento.service';


@Injectable({
  providedIn: 'root'
})
export class ItemOrcamentoAcessorioService {

  httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  url: string = 'http://localhost:8087/api/v1/itemorcamentoacessorio';


  constructor(private httpClient: HttpClient) { }

  // salvar(itemorcamentoacessorio: ItemOrcamentoAcessorio) {
  //   let itemorcamentoacessorios = JSON.parse(localStorage.getItem('itemorcamentoacessorios') || '[]');

  //   if(itemorcamentoacessorio.id === 0) {
  //     itemorcamentoacessorio.id = Math.floor(Math.random() * 65536)
  //     itemorcamentoacessorios.push(itemorcamentoacessorio);
  //   } else {
  //     let posicao = itemorcamentoacessorios.findIndex((Elemento: ItemOrcamentoAcessorio) => Elemento.id === itemorcamentoacessorio.id);
  //     itemorcamentoacessorios[posicao] = itemorcamentoacessorio;
  //   }

  //   localStorage.setItem('itemorcamentoacessorios', JSON.stringify(itemorcamentoacessorios));
  //   return itemorcamentoacessorio;

  // }

  // buscarPorId(id: number) {
    
  //   let itemorcamentoacessorios = JSON.parse(localStorage.getItem('itemorcamentoacessorios') || '[]');

  //   let itemorcamentoacessorio = new ItemOrcamentoAcessorio();
  //   itemorcamentoacessorio = itemorcamentoacessorios.find((Elemento: ItemOrcamentoAcessorio) => Elemento.id === id);
  //   return itemorcamentoacessorio;
  // }

  // listarItemOrcamentoAcessorioPorIdItemOrcamento(id: number) {
    
  //   let itemorcamentoacessorios = JSON.parse(localStorage.getItem('itemorcamentoacessorios') || '[]');

  //   let itensOrcamentosAcessorios = itemorcamentoacessorios.filter(function(item: ItemOrcamentoAcessorio){
  //     return item.iditemOrcamento === id;
  //   });

  //   return itensOrcamentosAcessorios;
  // }

  // excluir(id: number) {
  //   let itemorcamentoacessorios = JSON.parse(localStorage.getItem('itemorcamentoacessorios') || '[]');
  //   let itemorcamentoacessorios2 = JSON.parse(localStorage.getItem('itemorcamentoacessorios') || '[]');

  //   let tam = itemorcamentoacessorios.lenght;

  //   itemorcamentoacessorios = itemorcamentoacessorios.filter((Elemento: ItemOrcamentoAcessorio) => Elemento.id !== id);
  //   let itemorcamentoacessoriosExcluidos = itemorcamentoacessorios2.filter((Elemento: ItemOrcamentoAcessorio) => Elemento.id === id);

  //   let idOrcamento = this.itemOrcamentoService.buscarIdOrcamento(itemorcamentoacessoriosExcluidos[0].iditemOrcamento);
  //   let orcamento = this.orcamentoService.buscarPorId(idOrcamento);


  //   localStorage.setItem('itemorcamentoacessorios', JSON.stringify(itemorcamentoacessorios));

  //   if(tam === itemorcamentoacessorios.length) {
  //     return 0;
  //   } else {
  //     orcamento.valorTotal = orcamento.valorTotal - itemorcamentoacessoriosExcluidos[0].valorTotal;
  //     this.orcamentoService.salvar(orcamento);
  //     return 1;
  //   }
  // } 

  // listar() {
  //   let itemorcamentoacessorios = JSON.parse(localStorage.getItem('itemorcamentoacessorios') || '[]');
  //   return itemorcamentoacessorios;
  // }

  // excluirComIdItemOrcamento(id: number) {
  //   let itemorcamentoacessorios = JSON.parse(localStorage.getItem('itemorcamentoacessorios') || '[]');
  //   let itemorcamentoacessorios2 = JSON.parse(localStorage.getItem('itemorcamentoacessorios') || '[]');


  //   itemorcamentoacessorios = itemorcamentoacessorios.filter((Elemento: ItemOrcamentoAcessorio) => Elemento.iditemOrcamento !== id);
  //   let itemorcamentoacessoriosexcluidos = itemorcamentoacessorios2.filter((Elemento: ItemOrcamentoAcessorio) => Elemento.iditemOrcamento === id);

  //   localStorage.setItem('itemorcamentoacessorios', JSON.stringify(itemorcamentoacessorios));


  // }

  async Salvar(itemOrcamentoAcessorio: ItemOrcamentoAcessorio) {
    if (itemOrcamentoAcessorio.idItemOrcamentoAcessorio === 0) {
      return await this.httpClient.post(this.url, JSON.stringify(itemOrcamentoAcessorio), this.httpHeaders).toPromise();
    } else {
      return await this.httpClient.put(this.url, JSON.stringify(itemOrcamentoAcessorio), this.httpHeaders).toPromise();
    }

  }

  async listar() {
    return await this.httpClient.get(this.url).toPromise();
  }

  async listarItemOrcamentoAcessorioPorIdItemOrcamento(id: number) {
    let urlAuxiliar = this.url + "/listar" + "/" + id;
    return await this.httpClient.get(urlAuxiliar).toPromise();
  }

  async excluir(id: number) {
    let urlAuxiliar = this.url + "/" + id;
    return await this.httpClient.delete(urlAuxiliar).toPromise();

  }

  async excluirComIdItemOrcamento(id: number) {
    let urlAuxiliar = this.url + "/itemorcamento" + "/" + id;
    return await this.httpClient.delete(urlAuxiliar).toPromise();

  }

  async buscarPorId(id: number) {
    let urlAuxiliar = this.url + "/" + id;
    return await this.httpClient.get(urlAuxiliar).toPromise();
  } 

  async buscarPorIdItemOrcamento(id: number) {
    let urlAuxiliar = this.url + "/buscar" + "/" + id;
    return await this.httpClient.get(urlAuxiliar).toPromise();
  }




}
