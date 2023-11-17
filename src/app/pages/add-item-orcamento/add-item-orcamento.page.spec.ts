import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddItemOrcamentoPage } from './add-item-orcamento.page';

describe('AddItemOrcamentoPage', () => {
  let component: AddItemOrcamentoPage;
  let fixture: ComponentFixture<AddItemOrcamentoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddItemOrcamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
