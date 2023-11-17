import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Acessorio } from '../model/acessorio';

@Injectable({
  providedIn: 'root'
})
export class AcessorioService {

  httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  url: string = 'http://localhost:8087/api/v1/acessorio';


  constructor(private httpClient: HttpClient) { }

  // salvar(acessorio: Acessorio) {
  //   let acessorios = JSON.parse(localStorage.getItem('acessorios') || '[]');

  //   if(acessorio.id === 0) {
  //     acessorio.id = Math.floor(Math.random() * 65536)
  //     acessorios.push(acessorio);
  //   } else {
  //     let posicao = acessorios.findIndex((Elemento: Acessorio) => Elemento.id === acessorio.id);
  //     acessorios[posicao] = acessorio;
  //   }

  //   localStorage.setItem('acessorios', JSON.stringify(acessorios));
  //   return acessorio;

  // }

  // listarAcessorio() {
  //   let acessorios = JSON.parse(localStorage.getItem('acessorios') || '[]');
  //   console.log(acessorios);
  //   return acessorios;
  // }

  async salvar(acessorio: Acessorio) {
    if (acessorio.idAcessorio === 0) {
      return await this.httpClient.post(this.url, JSON.stringify(acessorio), this.httpHeaders).toPromise();
    } else {
      return await this.httpClient.put(this.url, JSON.stringify(acessorio), this.httpHeaders).toPromise();
    }
  }

  async listarAcessorio() {
    return await this.httpClient.get(this.url).toPromise();
  }
}
