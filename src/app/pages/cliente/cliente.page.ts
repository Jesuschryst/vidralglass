import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { __values } from 'tslib';
import * as _ from 'lodash';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {
  clientes!: Cliente[];
  queryText: string;
  results: any;


  constructor(private alertController: AlertController, private toastController: ToastController, private navController: NavController, private clienteService: ClienteService, private loadingController: LoadingController) {
    this.clientes = [];
    this.queryText = '';
    this.results = this.clientes;

  }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    this.carregarLista();
  }

  async carregarLista() {
    this.exibirLoader();
    this.clienteService.listarCliente().then((json) => {
      this.clientes = <Cliente[]>(json);
      this.results = this.clientes;
      this.fecharLoader();
    })

  }

  public filterCliente(cid: any) {
    let val = cid.target.value;
    if (val && val.trim() != '') {
      this.clientes = _.values(this.results);
      this.clientes = this.clientes.filter((cliente) => {
        return (cliente.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.clientes = this.results;
    }
  }

  public filtrarCliente(ev: any) {
    let val = ev.detail.value
    if (val && val.trim() !== '') {
      this.results = this.clientes.filter(term =>
        term.nome.toLocaleLowerCase().indexOf(val.toLowerCase().trim()) > -1);
    } else {
      this.results = this.clientes;
    }
  }

  exibirLoader() {
    this.loadingController.create({
      message: 'Carregando..'
    }).then((res) => {
      res.present();
    })
  }

  fecharLoader() {
    setTimeout(() => {
      this.loadingController.dismiss().then(() => {
      }).catch((erro) => {
        console.log('Não foi possível carregar: ', erro);
      });
    }, 500);
  }

  async exibirMensagem(texto: string) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 1500
    });
    toast.present();
  }

  async excluir(cliente: Cliente) {
    const alert = await this.alertController.create({
      header: 'Confirma a exclusão?',
      message: cliente.nome,
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Confirmar',
          cssClass: 'danger',
          handler: () => {
            this.clienteService.excluirEndereco(cliente.endereco.idEndereco).then(() => {
              this.clienteService.excluir(cliente.idCliente).then(() => {

                this.exibirMensagem('Excluido com sucesso!!');
                this.carregarLista();
              }).catch(() => {
                this.exibirMensagem('Erro ao excluir.');
              });
            })

          }
        }
      ]

    });
    await alert.present();

  }

}
