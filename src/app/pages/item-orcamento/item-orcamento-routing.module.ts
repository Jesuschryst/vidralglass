import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemOrcamentoPage } from './item-orcamento.page';

const routes: Routes = [
  {
    path: '',
    component: ItemOrcamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemOrcamentoPageRoutingModule {}
