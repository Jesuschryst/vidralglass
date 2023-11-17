import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { Acessorio } from 'src/app/model/acessorio';
import { ItemOrcamento } from 'src/app/model/item-orcamento';
import { ItemOrcamentoAcessorio } from 'src/app/model/item-orcamento-acessorio';
import { ItemOrcamentoAcessorioService } from 'src/app/services/item-orcamento-acessorio.service';
import { ItemOrcamentoService } from 'src/app/services/item-orcamento.service';
import { AcessorioService } from 'src/app/services/acessorio.service';
import { OrcamentoService } from 'src/app/services/orcamento.service';
import { Orcamento } from 'src/app/model/orcamento';


@Component({
  selector: 'app-add-item-orcamento-acessorio2',
  templateUrl: './add-item-orcamento-acessorio2.page.html',
  styleUrls: ['./add-item-orcamento-acessorio2.page.scss'],
})
export class AddItemOrcamentoAcessorio2Page implements OnInit {
  itemOrcamentoAcessorio: ItemOrcamentoAcessorio;
  formGroup: FormGroup;
  itemOrcamento: ItemOrcamento;
  orcamento: Orcamento;
  acessorios!: Acessorio[];



  constructor(private orcamentoService: OrcamentoService, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private itemOrcamentoAcessorioService: ItemOrcamentoAcessorioService, private acessorioService: AcessorioService, private itemOrcamentoService: ItemOrcamentoService, private toastController: ToastController, private navController: NavController) {

    this.itemOrcamentoAcessorio = new ItemOrcamentoAcessorio();
    this.itemOrcamento = new ItemOrcamento();
    this.orcamento = new Orcamento();

    this.formGroup = this.formBuilder.group({
      'valor': [this.itemOrcamentoAcessorio.valor, Validators.compose([
        Validators.required,
      ])],
      'iditemOrcamento': [this.itemOrcamentoAcessorio.iditemOrcamento, Validators.compose([

      ])],
      'quantidade': [this.itemOrcamentoAcessorio.quantidade, Validators.compose([
        Validators.required,
      ])],
      'idAcessorio': [this.itemOrcamentoAcessorio.idAcessorio, Validators.compose([
      ])],
    })

    let id = this.activatedRoute.snapshot.params['id'];

    itemOrcamentoService.buscarPorId(parseFloat(id)).then((json) => {
      this.itemOrcamento = <ItemOrcamento>(json);
      acessorioService.listarAcessorio().then((json) => {
        this.acessorios = <Acessorio[]>(json);

        if (id != null) {
          itemOrcamentoAcessorioService.buscarPorId(Number(id)).then((json) => {
            this.itemOrcamentoAcessorio = <ItemOrcamentoAcessorio>(json);

            if ((this.itemOrcamentoAcessorio === undefined) || (this.itemOrcamentoAcessorio === null)) {
              this.itemOrcamentoAcessorio = new ItemOrcamentoAcessorio();
            } else {
              this.formGroup.get('valor')?.setValue(this.itemOrcamentoAcessorio.valor);
              this.formGroup.get('iditemOrcamento')?.setValue(this.itemOrcamentoAcessorio.iditemOrcamento);
              itemOrcamentoService.buscarPorId(this.itemOrcamentoAcessorio.iditemOrcamento).then((json) => {
                this.itemOrcamento = <ItemOrcamento>(json);
                this.formGroup.get('quantidade')?.setValue(this.itemOrcamentoAcessorio.quantidade);
                this.formGroup.get('idAcessorio')?.setValue(this.itemOrcamentoAcessorio.idAcessorio);
              })
            }
          })
        }
      })



    }).catch((erro) => {
      this.exibirMensagem(erro);
    })





  }

  ngOnInit() {
  }

  async salvar() {
    this.itemOrcamentoAcessorio.valor = this.formGroup.value.valor;
    this.itemOrcamentoAcessorio.idAcessorio = this.formGroup.value.idAcessorio;
    this.itemOrcamentoAcessorio.iditemOrcamento = this.itemOrcamento.idItemOrcamento
    this.itemOrcamentoAcessorio.quantidade = this.formGroup.value.quantidade;
    this.itemOrcamentoAcessorio.valorTotal = Number(this.itemOrcamentoAcessorio.valor) * this.itemOrcamentoAcessorio.quantidade;

    this.itemOrcamentoAcessorioService.Salvar(this.itemOrcamentoAcessorio).then((json) => {
      let itemOrcamentoAcessorio = <ItemOrcamentoAcessorio>(json);

      this.itemOrcamentoService.buscarIdPorIdOrcamento(this.itemOrcamento.idOrcamento).then((json) => {
        let id = <number>(json);
        this.orcamentoService.buscarPorId(id).then((json) => {
          let orcamento = <Orcamento>(json);

          if ((this.itemOrcamentoAcessorio === undefined) || (this.itemOrcamentoAcessorio === null)) {
            this.exibirMensagem("Não foi possível salvar o acessorio")
            this.navController.navigateBack('/add-orcamento');
          } else {
            orcamento.valorTotal = orcamento.valorTotal + itemOrcamentoAcessorio.valorTotal;

            this.orcamentoService.Salvar(orcamento).then((json) => {
              this.orcamento = <Orcamento>(json);

              this.exibirMensagem("Acessório salvo")
            }).catch((erro) => {
              this.exibirMensagem("Erro no salvar do OrcamentoService " + erro);
            });
          }
        }).catch((erro) => {
          this.exibirMensagem("Error no buscarPorId do orcamentoService " + erro);
        });

      }).catch((error) => {
        this.exibirMensagem("Error no buscarPorId do itemOrcamentoService " + error);
      });
    }).catch((erro) => {
      this.exibirMensagem("Erro no salvar do itemOrcamentoService " + erro);
    });


          


  }

  async exibirMensagem(texto: string) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 1500
    });
    toast.present();
  }

}
