import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddItemAcessoriovPageRoutingModule } from './add-item-acessoriov-routing.module';

import { AddItemAcessoriovPage } from './add-item-acessoriov.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddItemAcessoriovPageRoutingModule
  ],
  declarations: [AddItemAcessoriovPage]
})
export class AddItemAcessoriovPageModule {}
