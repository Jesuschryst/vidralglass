import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddOrcamentoPage } from './add-orcamento.page';

const routes: Routes = [
  {
    path: '',
    component: AddOrcamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddOrcamentoPageRoutingModule {}
