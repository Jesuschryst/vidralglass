import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pages/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./pages/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'cliente',
    loadChildren: () => import('./pages/cliente/cliente.module').then( m => m.ClientePageModule)
  },
  {
    path: 'add-cliente',
    loadChildren: () => import('./pages/add-cliente/add-cliente.module').then( m => m.AddClientePageModule)
  },
  {
    path: 'add-cliente/:idCliente',
    loadChildren: () => import('./pages/add-cliente/add-cliente.module').then( m => m.AddClientePageModule)
  },
  {
    path: 'orcamento',
    loadChildren: () => import('./pages/orcamento/orcamento.module').then( m => m.OrcamentoPageModule)
  },
  {
    path: 'add-orcamento',
    loadChildren: () => import('./pages/item-orcamento/item-orcamento.module').then( m => m.ItemOrcamentoPageModule)
  }, 
  {
    path: 'add-orcamento/:idOrcamento',
    loadChildren: () => import('./pages/item-orcamento/item-orcamento.module').then( m => m.ItemOrcamentoPageModule)
  }, 
  {
    path: 'item-orcamento',
    loadChildren: () => import('./pages/add-orcamento/add-orcamento.module').then( m => m.AddOrcamentoPageModule)
  },
  {
    path: 'item-orcamento/:idOrcamento',
    loadChildren: () => import('./pages/add-orcamento/add-orcamento.module').then( m => m.AddOrcamentoPageModule)
  },
  {
    path: 'add-item-orcamento',
    loadChildren: () => import('./pages/add-item-orcamento/add-item-orcamento.module').then( m => m.AddItemOrcamentoPageModule)
  },
  {
    path: 'add-item-orcamento/:id',
    loadChildren: () => import('./pages/add-item-orcamento/add-item-orcamento.module').then( m => m.AddItemOrcamentoPageModule)
  },
  {
    path: 'add-item-orcamento-acessorio',
    loadChildren: () => import('./pages/add-item-orcamento-acessorio/add-item-orcamento-acessorio.module').then( m => m.AddItemOrcamentoAcessorioPageModule)
  },
  {
    path: 'add-item-orcamento-acessorio/:id',
    loadChildren: () => import('./pages/add-item-orcamento-acessorio/add-item-orcamento-acessorio.module').then( m => m.AddItemOrcamentoAcessorioPageModule)
  },
  {
    path: 'venda',
    loadChildren: () => import('./pages/venda/venda.module').then( m => m.VendaPageModule)
  },
  {
    path: 'add-venda',
    loadChildren: () => import('./pages/item-venda/item-venda.module').then( m => m.ItemVendaPageModule)
  },
  {
    path: 'item-venda', 
    loadChildren: () => import('./pages/add-venda/add-venda.module').then( m => m.AddVendaPageModule)
  },
  {
    path: 'add-item-venda',
    loadChildren: () => import('./pages/add-item-venda/add-item-venda.module').then( m => m.AddItemVendaPageModule)
  },
  {
    path: 'add-item-venda-acessorio',
    loadChildren: () => import('./pages/add-item-venda-acessorio/add-item-venda-acessorio.module').then( m => m.AddItemVendaAcessorioPageModule)
  },
  {
    path: 'add-item-acessorio',
    loadChildren: () => import('./pages/add-item-acessorio/add-item-acessorio.module').then( m => m.AddItemAcessorioPageModule)
  },
  {
    path: 'add-item-acessoriov',
    loadChildren: () => import('./pages/add-item-acessoriov/add-item-acessoriov.module').then( m => m.AddItemAcessoriovPageModule)
  },
  {
    path: 'add-item-orcamento-acessorio2',
    loadChildren: () => import('./pages/add-item-orcamento-acessorio2/add-item-orcamento-acessorio2.module').then( m => m.AddItemOrcamentoAcessorio2PageModule)
  },
  {
    path: 'add-item-orcamento-acessorio2/:id',
    loadChildren: () => import('./pages/add-item-orcamento-acessorio2/add-item-orcamento-acessorio2.module').then( m => m.AddItemOrcamentoAcessorio2PageModule)
  },
  {
    path: 'meus-dados',
    loadChildren: () => import('./pages/meus-dados/meus-dados.module').then( m => m.MeusDadosPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
