import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Orcamento } from 'src/app/model/orcamento';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { OrcamentoService } from 'src/app/services/orcamento.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/model/cliente';
import { format, parseISO } from 'date-fns'


@Component({
  selector: 'app-item-orcamento',
  templateUrl: './item-orcamento.page.html',
  styleUrls: ['./item-orcamento.page.scss'],
})
export class ItemOrcamentoPage implements OnInit {
  orcamento!: Orcamento;
  formGroup!: FormGroup;
  clientes!: Cliente[];
  gerar!: number;
  logado = JSON.parse(localStorage.getItem('logado') || '[]');


  constructor(private activatedRoute: ActivatedRoute, private toastController: ToastController, private navController: NavController, private formBuilder: FormBuilder, private orcamentoService: OrcamentoService, private clienteService: ClienteService) {
    this.orcamento = new Orcamento();

    this.formGroup = this.formBuilder.group({
      'dataOrcamento': [this.orcamento.dataOrcamento, Validators.compose([
        
      ])],
      'dataValidade': [this.orcamento.dataValidade, Validators.compose([
        Validators.required
      ])],
      'valorTotal': [this.orcamento.valorTotal, Validators.compose([
      ])],
      'status': [this.orcamento.status, Validators.compose([
      ])],
      'idUsuario': [this.orcamento.idUsuario, Validators.compose([
        Validators.required
      ])],
      'idCliente': [this.orcamento.idCliente, Validators.compose([
        Validators.required
      ])],
    })

    let id = this.activatedRoute.snapshot.params['idOrcamento'];
    this.listarClientes();

    if ((id != null)) {
      orcamentoService.buscarPorId(parseFloat(id)).then((json) => {
        this.orcamento = <Orcamento>(json);
        this.formGroup.get('dataOrcamento')?.setValue(this.orcamento.dataOrcamento);
        this.formGroup.get('dataValidade')?.setValue(this.orcamento.dataValidade);
        this.formGroup.get('valorTotal')?.setValue(this.orcamento.valorTotal);
        this.formGroup.get('status')?.setValue(this.orcamento.status);
        this.formGroup.get('idUsuario')?.setValue(this.orcamento.idUsuario);
        this.formGroup.get('idCliente')?.setValue(this.orcamento.idCliente);
      }).catch((erro) => {
        this.exibirMensagem("Erro no buscarId do orcamentoService " + erro);
      });

    }
  }

  ngOnInit() {
    
  }

  async ionViewWillEnter() {
    
  }

  async listarClientes() {
    this.clienteService.listarCliente().then((json) => {
      this.clientes = <Cliente[]>(json);
    }).catch((erro) => {
      this.exibirMensagem("Erro no listarClientes " + erro);
    });
  }


  async salvar() {


    this.orcamento.dataValidade = this.formGroup.value.dataValidade;

    this.orcamento.dataOrcamento = new Date().toISOString();

    this.orcamento.dataOrcamento = format(parseISO(this.orcamento.dataOrcamento), 'dd/MM/yyyy');

    console.log(this.orcamento.dataOrcamento);
    
    this.orcamento.valorTotal = this.formGroup.value.valorTotal;
    this.orcamento.status = this.formGroup.value.status;
    this.orcamento.idUsuario = this.logado.idUsuario;
    this.orcamento.idCliente = this.formGroup.value.idCliente;


    this.orcamentoService.Salvar(this.orcamento).then((json) => {
      this.orcamento = <Orcamento>(json);
      if (this.orcamento === undefined) {
        this.exibirMensagem("Não foi possível salvar o orcamento")
        this.navController.navigateBack('/add-orcamento');
      } else {
        this.exibirMensagem("Salvo com sucesso!")
        this.navController.navigateBack('/add-orcamento');
      }
    })
  }

  verificarValor() {
    if (this.orcamento.valorTotal === 0) {
      this.formGroup.get('valorTotal')?.setValue(0);
      return false;
    } else {
      this.formGroup.get('valorTotal')?.setValue(this.orcamento.valorTotal);
      return true;
    }
  }

  async valorFinal() {
    let valor = Number(this.gerar);
    this.orcamento.valorTotal = this.orcamento.valorTotal * ((valor / 100) + 1);
    this.formGroup.get('valorTotal')?.setValue(this.orcamento.valorTotal);
    this.orcamentoService.Salvar(this.orcamento).then((json) => {
      this.orcamento = <Orcamento>(json);
    })
  }

  verificarOrcamento() {
    if (this.orcamento.idOrcamento === 0) {
      this.formGroup.get('status')?.setValue("Andamento");
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
