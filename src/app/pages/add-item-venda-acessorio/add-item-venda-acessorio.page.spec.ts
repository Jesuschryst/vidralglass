import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddItemVendaAcessorioPage } from './add-item-venda-acessorio.page';

describe('AddItemVendaAcessorioPage', () => {
  let component: AddItemVendaAcessorioPage;
  let fixture: ComponentFixture<AddItemVendaAcessorioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddItemVendaAcessorioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
