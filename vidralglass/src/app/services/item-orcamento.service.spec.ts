import { TestBed } from '@angular/core/testing';

import { ItemOrcamentoService } from './item-orcamento.service';

describe('ItemOrcamentoService', () => {
  let service: ItemOrcamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemOrcamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
