import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddItemAcessoriovPage } from './add-item-acessoriov.page';

describe('AddItemAcessoriovPage', () => {
  let component: AddItemAcessoriovPage;
  let fixture: ComponentFixture<AddItemAcessoriovPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddItemAcessoriovPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
