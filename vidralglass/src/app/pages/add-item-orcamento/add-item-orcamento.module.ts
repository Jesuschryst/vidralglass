import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddItemOrcamentoPageRoutingModule } from './add-item-orcamento-routing.module';

import { AddItemOrcamentoPage } from './add-item-orcamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddItemOrcamentoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddItemOrcamentoPage]
})
export class AddItemOrcamentoPageModule {}
