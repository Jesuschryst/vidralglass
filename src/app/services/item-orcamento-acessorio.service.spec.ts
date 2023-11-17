import { TestBed } from '@angular/core/testing';

import { ItemOrcamentoAcessorioService } from './item-orcamento-acessorio.service';

describe('ItemOrcamentoAcessorioService', () => {
  let service: ItemOrcamentoAcessorioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemOrcamentoAcessorioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
