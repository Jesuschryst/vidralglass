import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddItemAcessorioPageRoutingModule } from './add-item-acessorio-routing.module';

import { AddItemAcessorioPage } from './add-item-acessorio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddItemAcessorioPageRoutingModule
  ],
  declarations: [AddItemAcessorioPage]
})
export class AddItemAcessorioPageModule {}
