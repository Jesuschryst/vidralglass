import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddItemOrcamentoAcessorio2Page } from './add-item-orcamento-acessorio2.page';

const routes: Routes = [
  {
    path: '',
    component: AddItemOrcamentoAcessorio2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddItemOrcamentoAcessorio2PageRoutingModule {}
