import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxMaskModule } from 'ngx-mask';


import { IonicModule } from '@ionic/angular';

import { AddClientePageRoutingModule } from './add-cliente-routing.module';

import { AddClientePage } from './add-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddClientePageRoutingModule,
    ReactiveFormsModule,
    NgxMaskModule.forChild()
  ],
  declarations: [AddClientePage]
})
export class AddClientePageModule {}
