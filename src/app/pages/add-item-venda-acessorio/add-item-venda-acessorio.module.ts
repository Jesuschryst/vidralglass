import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddItemVendaAcessorioPageRoutingModule } from './add-item-venda-acessorio-routing.module';

import { AddItemVendaAcessorioPage } from './add-item-venda-acessorio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddItemVendaAcessorioPageRoutingModule
  ],
  declarations: [AddItemVendaAcessorioPage]
})
export class AddItemVendaAcessorioPageModule {}
