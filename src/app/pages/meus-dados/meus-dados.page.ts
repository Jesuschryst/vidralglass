import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastController, NavController } from '@ionic/angular';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-meus-dados',
  templateUrl: './meus-dados.page.html',
  styleUrls: ['./meus-dados.page.scss'],
})
export class MeusDadosPage implements OnInit {

  usuario!: Usuario;
  formGroup!: FormGroup;
  logado = JSON.parse(localStorage.getItem('logado') || '[]');

  
  constructor(private activatedRoute: ActivatedRoute, private toastController: ToastController, private navController: NavController, private formBuilder: FormBuilder, private usuarioService: UsuarioService) { 
  
    this.usuario = new Usuario();

    this.formGroup = this.formBuilder.group({
      'email': [Validators.compose([
        Validators.required,
      ])],
      'senha': [Validators.compose([
      ])]
    });

    this.formGroup.get('email')?.setValue(this.logado.login);

  }

  async exibirMensagem(texto: string) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 1500
    });
    toast.present();
  }


  ngOnInit() {
  }

  salvar() {
    let senha = this.formGroup.value.senha;
    let email = this.formGroup.value.email;
    this.usuario.senha = senha;
    this.usuario.login = email;
    this.usuario.idUsuario = this.logado.idUsuario;

    this.usuarioService.salvar(this.usuario).then((json) => {
      this.usuario = <Usuario>(json);
      if((this.usuario === undefined) || (this.usuario === null)) {
        this.exibirMensagem('Não foi possivel mudar a senha ou email')
      }else{
        localStorage.setItem('logado', JSON.stringify(this.usuario));
        this.exibirMensagem('Dado(s) alterado(s) com sucesso');
         this.navController.navigateBack('/principal');
      }
    })
      
    }

}
