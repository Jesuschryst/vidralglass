import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ItemOrcamento } from 'src/app/model/item-orcamento';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { ItemOrcamentoService } from 'src/app/services/item-orcamento.service';
import { OrcamentoService } from 'src/app/services/orcamento.service';
import { Orcamento } from 'src/app/model/orcamento';

@Component({
  selector: 'app-add-item-orcamento',
  templateUrl: './add-item-orcamento.page.html',
  styleUrls: ['./add-item-orcamento.page.scss'],
})
export class AddItemOrcamentoPage implements OnInit {
  itemorcamento!: ItemOrcamento;
  orcamento!: Orcamento;
  formGroup!: FormGroup;
  m2!: number
  id!: number;

  constructor(private activatedRoute: ActivatedRoute, private toastController: ToastController, private navController: NavController, private formBuilder: FormBuilder, private itemorcamentoService: ItemOrcamentoService, private orcamentoService: OrcamentoService) {
    this.itemorcamento = new ItemOrcamento();

    this.formGroup = this.formBuilder.group({
      'tipo': [this.itemorcamento.tipo, Validators.compose([
        Validators.required,
      ])],
      'nome': [this.itemorcamento.nome, Validators.compose([
        Validators.required,
      ])],
      'quantidade': [this.itemorcamento.quantidade, Validators.compose([
        Validators.required,
      ])],
      'observacao': [this.itemorcamento.observacao, Validators.compose([
        Validators.required,
      ])],
      'altura': [this.itemorcamento.altura, Validators.compose([
        Validators.required,
      ])],
      'largura': [this.itemorcamento.largura, Validators.compose([
        Validators.required,
      ])],
      'unidade': [this.itemorcamento.unidade, Validators.compose([
        Validators.required,
      ])],
      'valorM2': [this.itemorcamento.valorM2, Validators.compose([
        Validators.required,
      ])],
      'espessura': [this.itemorcamento.espessura, Validators.compose([
        Validators.required,
      ])],
      'cor': [this.itemorcamento.cor, Validators.compose([
        Validators.required,
      ])],
      'idOrcamento': [this.itemorcamento.idOrcamento, Validators.compose([
        Validators.required,
      ])],
    })


    this.id = parseInt(this.activatedRoute.snapshot.params['id']);

    orcamentoService.buscarPorId(Number(this.id)).then((json) => {
      this.orcamento = <Orcamento>(json);

      if (this.id != null) {

        itemorcamentoService.buscarPorId(this.id).then((json) => {
          this.itemorcamento = <ItemOrcamento>(json);
          if ((this.itemorcamento === undefined) || (this.itemorcamento === null)) {
            this.itemorcamento = new ItemOrcamento();
          } else {
            this.formGroup.get('tipo')?.setValue(this.itemorcamento.tipo);
            this.formGroup.get('nome')?.setValue(this.itemorcamento.nome);
            this.formGroup.get('quantidade')?.setValue(this.itemorcamento.quantidade);
            this.formGroup.get('observacao')?.setValue(this.itemorcamento.observacao);
            this.formGroup.get('altura')?.setValue(this.itemorcamento.altura);
            this.formGroup.get('largura')?.setValue(this.itemorcamento.largura);
            this.formGroup.get('valorM2')?.setValue(this.itemorcamento.valorM2);
            this.formGroup.get('espessura')?.setValue(this.itemorcamento.espessura);
            this.formGroup.get('cor')?.setValue(this.itemorcamento.cor);
            this.formGroup.get('idOrcamento')?.setValue(this.itemorcamento.idOrcamento);
            this.formGroup.get('unidade')?.setValue(this.itemorcamento.unidade);
          }
        })
      }
    })




  }

  ngOnInit() {
  }

  async salvar() {
    this.itemorcamento.tipo = this.formGroup.value.tipo;
    this.itemorcamento.nome = this.formGroup.value.nome;
    this.itemorcamento.quantidade = this.formGroup.value.quantidade;
    this.itemorcamento.observacao = this.formGroup.value.observacao;
    this.itemorcamento.largura = this.formGroup.value.largura;
    this.itemorcamento.valorM2 = this.formGroup.value.valorM2;
    this.itemorcamento.espessura = this.formGroup.value.espessura;
    this.itemorcamento.idOrcamento = this.id;
    this.itemorcamento.cor = this.formGroup.value.cor;
    this.itemorcamento.unidade = this.formGroup.value.unidade;
    this.itemorcamento.altura = this.formGroup.value.altura;

    

    if (this.itemorcamento.unidade === "m") {
      this.m2 = parseFloat(this.itemorcamento.altura) * (parseFloat(this.itemorcamento.largura));
    } else {
      if (this.itemorcamento.unidade === "cm") {
        let altura = parseFloat(this.itemorcamento.altura) / 100;
        let largura = parseFloat(this.itemorcamento.largura) / 100;

        this.m2 = altura * largura;
      }
    }



    let valorItem = (parseFloat(this.itemorcamento.valorM2) * this.m2).toFixed(2);
    let valorTotal = (parseFloat(valorItem) * this.itemorcamento.quantidade).toFixed(2);

    this.itemorcamento.valorItem = parseFloat(valorItem);
    this.itemorcamento.valorTotal = parseFloat(valorTotal);



        this.orcamento.valorTotal = (this.orcamento.valorTotal) + (this.itemorcamento.valorTotal);
        this.orcamentoService.Salvar(this.orcamento).then((json) => {
          this.orcamento = <Orcamento>(json);

        this.itemorcamentoService.Salvar(this.itemorcamento).then((json) => {
          this.itemorcamento = <ItemOrcamento>(json);
        


          if (this.itemorcamento === null) {
            this.exibirMensagem("Não foi possivel salvar o item!");
          } else {
            this.exibirMensagem("Item salvo!");

          }
        })
      })






  }

  itemOrcamento() {
    if (this.itemorcamento.idItemOrcamento === 0) {
      return false;
    } else {
      return true;
    }
  }

  async exibirMensagem(texto: string) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 1500
    });
    toast.present();
  }

}
