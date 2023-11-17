import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddItemAcessorioPage } from './add-item-acessorio.page';

describe('AddItemAcessorioPage', () => {
  let component: AddItemAcessorioPage;
  let fixture: ComponentFixture<AddItemAcessorioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddItemAcessorioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
