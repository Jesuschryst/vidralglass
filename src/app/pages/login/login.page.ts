import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Usuario } from 'src/app/model/usuario';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario!: Usuario;
  formGroup!: FormGroup;
  logado = JSON.parse(localStorage.getItem('logado') || '[]');
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

  async entrar() {
    this.usuario.login = this.formGroup.value.login;
    this.usuario.senha = this.formGroup.value.senha;
  

    this.usuarioService.autenticarUsuario(this.usuario.login, this.usuario.senha).then((json) => {
      if(json === null){
        this.exibirMensagem('Esse usuario nao existe')
      }else{
        this.usuario = <Usuario>(json);
        console.log(json);
        let logado = JSON.parse(localStorage.getItem('logado') || '[]');
        
        logado = this.usuario;
        console.log(this.usuario);
        localStorage.setItem('logado', JSON.stringify(logado));
        this.exibirMensagem('Bem vindo!');
         this.navController.navigateBack('/principal');
      }
    })
  }

  togglePasswordFieldType(){
    this.isTextFieldType = !this.isTextFieldType;
  }

  async exibirMensagem(texto: string) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 1500
    });
    toast.present();
  }

}
