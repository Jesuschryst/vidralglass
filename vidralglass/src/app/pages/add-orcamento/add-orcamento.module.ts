import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddOrcamentoPageRoutingModule } from './add-orcamento-routing.module';

import { AddOrcamentoPage } from './add-orcamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddOrcamentoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddOrcamentoPage]
})
export class AddOrcamentoPageModule {}
