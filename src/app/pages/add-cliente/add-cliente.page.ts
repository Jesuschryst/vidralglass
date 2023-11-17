import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Cliente } from 'src/app/model/cliente';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { ClienteService } from 'src/app/services/cliente.service';
import { Endereco } from 'src/app/model/endereco';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.page.html',
  styleUrls: ['./add-cliente.page.scss'],
})
export class AddClientePage implements OnInit {
  cliente!: Cliente;
  formGroup!: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private toastController: ToastController, private navController: NavController, private formBuilder: FormBuilder, private clienteService: ClienteService) {
    this.cliente = new Cliente();

    this.formGroup = this.formBuilder.group({
      'nome': [this.cliente.nome, Validators.compose([
        Validators.required,
      ])],
      'cpf': [this.cliente.cpf, Validators.compose([
        Validators.required,
        Validators.minLength(14),
        Validators.maxLength(14),
      ])],
      'rua': [this.cliente.endereco.rua, Validators.compose([
        Validators.required,
      ])],
      'cidade': [this.cliente.endereco.cidade, Validators.compose([
        Validators.required,
      ])],
      'bairro': [this.cliente.endereco.bairro, Validators.compose([
        Validators.required,
      ])],
      'numero': [this.cliente.endereco.numero, Validators.compose([
        Validators.required,
      ])],
      'complemento': [this.cliente.endereco.complemento, Validators.compose([
        Validators.required,
      ])]
    })

    let idCliente = this.activatedRoute.snapshot.params['idCliente'];

    if (idCliente != null) {
      this.clienteService.buscarPorId(parseFloat(idCliente)).then((json) => {
        this.cliente = <Cliente>(json);
        this.formGroup.get('nome')?.setValue(this.cliente.nome);
        this.formGroup.get('cpf')?.setValue(this.cliente.cpf);
        this.formGroup.get('rua')?.setValue(this.cliente.endereco.rua);
        this.formGroup.get('cidade')?.setValue(this.cliente.endereco.cidade);
        this.formGroup.get('bairro')?.setValue(this.cliente.endereco.bairro);
        this.formGroup.get('numero')?.setValue(this.cliente.endereco.numero);
        this.formGroup.get('complemento')?.setValue(this.cliente.endereco.complemento);
      }).catch((erro) => {
        this.exibirMensagem("Error: " + erro);
      })

    }
  }

  ngOnInit() {
  }

  salvar() {
    this.cliente.nome = this.formGroup.value.nome;
    this.cliente.cpf = this.formGroup.value.cpf;
    this.cliente.endereco.rua = this.formGroup.value.rua;
    this.cliente.endereco.cidade = this.formGroup.value.cidade;
    this.cliente.endereco.bairro = this.formGroup.value.bairro;
    this.cliente.endereco.numero = this.formGroup.value.numero;
    this.cliente.endereco.complemento = this.formGroup.value.complemento;
    this.cliente.endereco.idCliente = this.cliente.idCliente;
    console.log(this.cliente.idCliente);


    this.clienteService.Salvar(this.cliente).then((json) => {
      this.cliente = <Cliente>(json);
      this.cliente.endereco.idCliente = this.cliente.idCliente;
      this.clienteService.salvarEnd(this.cliente.endereco).then((json) => {
        console.log(this.cliente.idCliente);
        this.cliente.endereco = <Endereco>(json);
        if (this.cliente != undefined) {
          console.log(this.cliente.idCliente);
          this.exibirMensagem("Cliente salvo!");
          this.navController.navigateBack('/cliente');
        } else {
          this.exibirMensagem("Não foi possível salvar o cliente");
        }
      })
    })







    // let cliente = this.clienteService.Salvar(this.cliente);
    // if (cliente != undefined) {
    //   this.exibirMensagem("Usuario salvo!");
    //   this.navController.navigateBack('/cliente');
    // }
    // else {
    //   this.exibirMensagem("Não foi possível salvar o cliente");
    // }
  }

  async exibirMensagem(texto: string) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 1500
    });
    toast.present();
  }

}
