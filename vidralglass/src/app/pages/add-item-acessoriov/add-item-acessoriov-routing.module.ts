import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddItemAcessoriovPage } from './add-item-acessoriov.page';

const routes: Routes = [
  {
    path: '',
    component: AddItemAcessoriovPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddItemAcessoriovPageRoutingModule {}
