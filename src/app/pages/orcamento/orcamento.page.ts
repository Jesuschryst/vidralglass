import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Cliente } from 'src/app/model/cliente';
import { Orcamento } from 'src/app/model/orcamento';
import { OrcamentoService } from 'src/app/services/orcamento.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { OrcamentoCompleto } from 'src/app/model/orcamento-completo';
import { ItemOrcamentoService } from 'src/app/services/item-orcamento.service';
import { ItemOrcamentoAcessorioService } from 'src/app/services/item-orcamento-acessorio.service';
import { ItemOrcamento } from 'src/app/model/item-orcamento';
@Component({
  selector: 'app-orcamento',
  templateUrl: './orcamento.page.html',
  styleUrls: ['./orcamento.page.scss'],
})
export class OrcamentoPage implements OnInit {
  orcamentos!: Orcamento[];
  orcamento!: Orcamento;
  id!: number[];
  orcamentosCompleto!: OrcamentoCompleto[]
  cliente!: Cliente;
  clientes!: Cliente[];
  queryText: string;
  results: any;

  constructor(private itemOrcamentoAcessorioService: ItemOrcamentoAcessorioService, private itemOrcamentoService: ItemOrcamentoService, private orcamentoService: OrcamentoService, private clienteService: ClienteService, private alertController: AlertController, private toastController: ToastController) {
    this.orcamentos = [];
    this.orcamento = new Orcamento();
    this.id = [];
    this.orcamentosCompleto = [];
    this.clientes = [];
    this.cliente = new Cliente();
    this.queryText = '';
    this.results = this.clientes;
  }

  ngOnInit() {

  }

  async ionViewWillEnter() {
    this.carregarLista();
  }

  gerarLista() {
    this.orcamentosCompleto = [];

    






    this.orcamentoService.listarOrcamentos().then((json) => {
      this.orcamentos = <Orcamento[]>(json);
      this.clienteService.listarCliente().then((json) => {
        this.clientes = <Cliente[]>(json);

        for (let c = 0; c < this.orcamentos.length; c++) {
          let clienteOrcamento: Cliente = new Cliente();
          for (const cliente of this.clientes) {
            if (cliente.idCliente === Number(this.orcamentos[c].idCliente)) {
              clienteOrcamento = cliente;
              let orcamentoCompleto: OrcamentoCompleto = new OrcamentoCompleto();
              orcamentoCompleto.orcamento = this.orcamentos[c];
              orcamentoCompleto.cliente.nome = clienteOrcamento.nome;
             this.orcamentosCompleto.push(orcamentoCompleto);
            }
            
          }
        }
        this.results = this.orcamentosCompleto;
      })
    })




  }

  public filtrarCliente(ev: any) {
    let val = ev.detail.value
    if (val && val.trim() !== '') {
      this.results = this.orcamentosCompleto.filter(term =>
        term.cliente.nome.toLocaleLowerCase().indexOf(val.toLowerCase().trim()) > -1);
    } else {
      this.results = this.orcamentosCompleto;
    }
  }

  async carregarLista() {
    this.gerarLista();
  }

  excluirOrcamentoComleto(id: number) {
    for (let c = 0; c < this.orcamentosCompleto.length; c++) {
      if (this.orcamentosCompleto[c].orcamento.idOrcamento === id) {
        this.orcamentosCompleto = this.orcamentosCompleto.filter((Elemento: OrcamentoCompleto) => Elemento.orcamento.idOrcamento !== id);
      }
    }
    this.carregarLista();
  }

  async excluir(orcamento: Orcamento) {
    const alert = await this.alertController.create({
      header: 'Confirma a exclusão?',
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Confirmar',
          cssClass: 'danger',
          handler: () => {
              this.orcamentoService.excluir(orcamento.idOrcamento).then(() => {
                this.excluirOrcamentoComleto(orcamento.idOrcamento);
                this.exibirMensagem('Excluido com sucesso!!');
                this.carregarLista();
              }).catch((erro) => {
                this.exibirMensagem("Error: " + erro);
              })
            
            
          }
        }
      ]

    });
    await alert.present();

  }

  async exibirMensagem(texto: string) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 1500
    });
    toast.present();
  }

}
