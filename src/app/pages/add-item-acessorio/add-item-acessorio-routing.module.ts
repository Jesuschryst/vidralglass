import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddItemAcessorioPage } from './add-item-acessorio.page';

const routes: Routes = [
  {
    path: '',
    component: AddItemAcessorioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddItemAcessorioPageRoutingModule {}
