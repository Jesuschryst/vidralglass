import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddItemVendaAcessorioPage } from './add-item-venda-acessorio.page';

const routes: Routes = [
  {
    path: '',
    component: AddItemVendaAcessorioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddItemVendaAcessorioPageRoutingModule {}
