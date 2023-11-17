import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxMaskModule } from 'ngx-mask';


import { IonicModule } from '@ionic/angular';

import { ItemOrcamentoPageRoutingModule } from './item-orcamento-routing.module';

import { ItemOrcamentoPage } from './item-orcamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemOrcamentoPageRoutingModule,
    ReactiveFormsModule,
    NgxMaskModule.forChild()
  ],
  declarations: [ItemOrcamentoPage]
})
export class ItemOrcamentoPageModule {}
