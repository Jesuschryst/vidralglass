import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddOrcamentoPage } from './add-orcamento.page';

describe('AddOrcamentoPage', () => {
  let component: AddOrcamentoPage;
  let fixture: ComponentFixture<AddOrcamentoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddOrcamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
