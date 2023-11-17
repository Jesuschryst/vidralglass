import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddItemOrcamentoAcessorioPageRoutingModule } from './add-item-orcamento-acessorio-routing.module';

import { AddItemOrcamentoAcessorioPage } from './add-item-orcamento-acessorio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddItemOrcamentoAcessorioPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddItemOrcamentoAcessorioPage]
})
export class AddItemOrcamentoAcessorioPageModule {}
