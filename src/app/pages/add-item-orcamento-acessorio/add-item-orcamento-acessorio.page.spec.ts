import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddItemOrcamentoAcessorioPage } from './add-item-orcamento-acessorio.page';

describe('AddItemOrcamentoAcessorioPage', () => {
  let component: AddItemOrcamentoAcessorioPage;
  let fixture: ComponentFixture<AddItemOrcamentoAcessorioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddItemOrcamentoAcessorioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
