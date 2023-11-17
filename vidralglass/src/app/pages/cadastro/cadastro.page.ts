import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Usuario } from 'src/app/model/usuario';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  usuario!: Usuario;
  formGroup!: FormGroup;
  isTextFieldType!: boolean;

  
  constructor(private activatedRoute: ActivatedRoute, private toastController: ToastController, private navController: NavController, private formBuilder: FormBuilder, private usuarioService: UsuarioService) {
    this.usuario = new Usuario();

    this.formGroup = this.formBuilder.group({
      'login': [this.usuario.login, Validators.compose([
        Validators.required,
      ])],
      'senha': [this.usuario.senha, Validators.compose([
        Validators.required,
      ])]
    })

   }

  ngOnInit() {
  }

  togglePasswordFieldType(){
    this.isTextFieldType = !this.isTextFieldType;
  }

  cadastrar() {
    this.usuario.login = this.formGroup.value.login;
    this.usuario.senha = this.formGroup.value.senha;
    
    this.usuarioService.salvar(this.usuario).then((json) => {
      this.usuario = <Usuario>(json);
      if (this.usuario) {
        this.exibirMensagem("O registro foi salvo com sucesso!");
        this.navController.navigateBack('/inicio');
        console.log(this.usuario.idUsuario);
      } else {
        this.exibirMensagem("Houve um erro ao salvar o registro.")
      }
    }).catch((erro) => {
      this.exibirMensagem("Houve um erro ao salvar o usuario: " + erro);
      console.log(erro);
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
