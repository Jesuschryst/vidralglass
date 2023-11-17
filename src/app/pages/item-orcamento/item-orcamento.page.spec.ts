import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemOrcamentoPage } from './item-orcamento.page';

describe('ItemOrcamentoPage', () => {
  let component: ItemOrcamentoPage;
  let fixture: ComponentFixture<ItemOrcamentoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ItemOrcamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
