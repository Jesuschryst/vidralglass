import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddItemVendaPage } from './add-item-venda.page';

describe('AddItemVendaPage', () => {
  let component: AddItemVendaPage;
  let fixture: ComponentFixture<AddItemVendaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddItemVendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
