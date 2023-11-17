import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddItemVendaPageRoutingModule } from './add-item-venda-routing.module';

import { AddItemVendaPage } from './add-item-venda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddItemVendaPageRoutingModule
  ],
  declarations: [AddItemVendaPage]
})
export class AddItemVendaPageModule {}
