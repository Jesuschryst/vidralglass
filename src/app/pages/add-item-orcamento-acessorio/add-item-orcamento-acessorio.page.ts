import { Component, OnInit } from '@angular/core';
import { OrcamentoService } from 'src/app/services/orcamento.service';
import { ItemOrcamentoService } from 'src/app/services/item-orcamento.service';
import { ItemOrcamentoAcessorioService } from 'src/app/services/item-orcamento-acessorio.service';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemOrcamento } from 'src/app/model/item-orcamento';
import { ItemOrcamentoAcessorio } from 'src/app/model/item-orcamento-acessorio';
import { ItemOrcamentoAcessorioCompleto } from 'src/app/model/item-orcamento-acessorio-completo';
import { Acessorio } from 'src/app/model/acessorio';
import { AcessorioService } from 'src/app/services/acessorio.service';


@Component({
  selector: 'app-add-item-orcamento-acessorio',
  templateUrl: './add-item-orcamento-acessorio.page.html',
  styleUrls: ['./add-item-orcamento-acessorio.page.scss'],
})
export class AddItemOrcamentoAcessorioPage implements OnInit {
  formGroup!: FormGroup;
  itemOrcamento: ItemOrcamento;
  acessorios: Acessorio[];
  itemorcamentoAcessorio: ItemOrcamentoAcessorio[];
  itemOrcamentoAcessorioCompleto!: ItemOrcamentoAcessorioCompleto[]

  constructor(private acessorioService: AcessorioService, private loadingController: LoadingController, private alertController: AlertController, private toastController: ToastController, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private orcamentoService: OrcamentoService, private itemOrcamentoService: ItemOrcamentoService, private itemOrcamentoAcessorioService: ItemOrcamentoAcessorioService) {
    this.acessorios = [];
    this.itemorcamentoAcessorio = [];
    this.itemOrcamentoAcessorioCompleto = [];
    this.itemOrcamento = new ItemOrcamento();

    let id = this.activatedRoute.snapshot.params['id'];

    itemOrcamentoService.buscarPorId(parseFloat(id)).then((json) => {
      this.itemOrcamento = <ItemOrcamento>(json);
    });
  }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    this.carregarLista();
  }

  async carregarLista() {
    this.exibirLoader();

    this.itemOrcamentoAcessorioCompleto = [];
    this.itemOrcamentoAcessorioService.listarItemOrcamentoAcessorioPorIdItemOrcamento(this.itemOrcamento.idItemOrcamento).then((json) => {
      this.itemorcamentoAcessorio = <ItemOrcamentoAcessorio[]>(json);
      this.acessorioService.listarAcessorio().then((json) => {
        this.acessorios = <Acessorio[]>(json);

        for (let c = 0; c < this.itemorcamentoAcessorio.length; c++) {
          let acessorioItemOrcamento: Acessorio = new Acessorio();
          for (const acessorio of this.acessorios) {
            if (acessorio.idAcessorio === Number(this.itemorcamentoAcessorio[c].idAcessorio)) {
              acessorioItemOrcamento = acessorio;
              let itemOrcamentoAcessorioCompleto: ItemOrcamentoAcessorioCompleto = new ItemOrcamentoAcessorioCompleto();
              itemOrcamentoAcessorioCompleto.itemOrcamentoAcessorio = this.itemorcamentoAcessorio[c];
              itemOrcamentoAcessorioCompleto.acessorio.nome = acessorioItemOrcamento.nome;
              this.itemOrcamentoAcessorioCompleto.push(itemOrcamentoAcessorioCompleto);
            }

          }
        }
        this.fecharLoader();
      });
    })

    
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

  async excluir(itemOrcamentoAcessorio: ItemOrcamentoAcessorio) {
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

            this.itemOrcamentoAcessorioService.excluir(itemOrcamentoAcessorio.idAcessorio).then(() => {
              this.exibirMensagem('Excluido com sucesso!!');
              this.carregarLista();
            }).catch((erro) => {
              this.exibirMensagem("Erro ao excluir. " + erro);
            })
          }
        }
      ]

    });
    await alert.present();

  }

}
