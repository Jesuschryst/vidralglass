import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddItemOrcamentoPage } from './add-item-orcamento.page';

const routes: Routes = [
  {
    path: '',
    component: AddItemOrcamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddItemOrcamentoPageRoutingModule {}
