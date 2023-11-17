import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddItemOrcamentoAcessorioPage } from './add-item-orcamento-acessorio.page';

const routes: Routes = [
  {
    path: '',
    component: AddItemOrcamentoAcessorioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddItemOrcamentoAcessorioPageRoutingModule {}
