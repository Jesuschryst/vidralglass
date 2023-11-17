import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Orcamento } from 'src/app/model/orcamento';
import { ItemOrcamento } from 'src/app/model/item-orcamento';
import { ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { OrcamentoService } from 'src/app/services/orcamento.service';
import { ItemOrcamentoService } from 'src/app/services/item-orcamento.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/model/cliente';


@Component({
  selector: 'app-add-orcamento',
  templateUrl: './add-orcamento.page.html',
  styleUrls: ['./add-orcamento.page.scss'],
})
export class AddOrcamentoPage implements OnInit {
  orcamento: Orcamento;
  itemOrcamentos: ItemOrcamento[];
  formGroup: FormGroup;
  itemOrcamento: ItemOrcamento;

  constructor(private loadingController: LoadingController, private alertController: AlertController, private toastController: ToastController, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private orcamentoService: OrcamentoService, private clienteService: ClienteService, private itemOrcamentoService: ItemOrcamentoService) {
    this.orcamento = new Orcamento();
    this.itemOrcamentos = [];
    this.itemOrcamento = new ItemOrcamento();

    this.formGroup = this.formBuilder.group({
      'nome': [Validators.compose([
        Validators.required,
      ])]
    })

    let id = this.activatedRoute.snapshot.params['idOrcamento'];

    if (id != null) {

      orcamentoService.buscarPorId(parseFloat(id)).then((orcament) => {
        this.orcamento = <Orcamento>(orcament);

        clienteService.buscarPorId(Number(this.orcamento.idCliente)).then((json) => {
        let cliente = <Cliente>(json);

        this.formGroup.get('nome')?.setValue(cliente.nome);

        }).catch((erro) => {
          this.exibirMensagem(erro);
        }); 
      }).catch((erro) => {
        this.exibirMensagem(erro);
      });
    }






  }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    this.carregarLista();
  }

  async carregarLista() {
    this.exibirLoader();
    this.itemOrcamentoService.listarItemOrcamentoPorIdOrcamento(this.orcamento.idOrcamento).then((json) => {
      this.itemOrcamentos = <ItemOrcamento[]>(json);
    }).catch((erro) => {
      this.exibirMensagem(erro);
    })
    this.fecharLoader();
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

  async excluir(itemOrcamento: ItemOrcamento) {
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

            this.itemOrcamentoService.excluir(itemOrcamento.idItemOrcamento).then(() => {
              this.exibirMensagem('Excluido com sucesso!!');
              this.carregarLista();
            }).catch((erro) => {
              this.exibirMensagem('Erro ao excluir.' + erro);
            })
          }
        }
      ]

    });
    await alert.present();

  }

}
