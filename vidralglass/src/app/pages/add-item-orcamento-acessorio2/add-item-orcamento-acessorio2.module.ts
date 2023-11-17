import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddItemOrcamentoAcessorio2PageRoutingModule } from './add-item-orcamento-acessorio2-routing.module';

import { AddItemOrcamentoAcessorio2Page } from './add-item-orcamento-acessorio2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddItemOrcamentoAcessorio2PageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddItemOrcamentoAcessorio2Page]
})
export class AddItemOrcamentoAcessorio2PageModule {}
