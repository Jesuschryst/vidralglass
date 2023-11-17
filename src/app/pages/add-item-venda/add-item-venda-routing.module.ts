import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddItemVendaPage } from './add-item-venda.page';

const routes: Routes = [
  {
    path: '',
    component: AddItemVendaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddItemVendaPageRoutingModule {}
