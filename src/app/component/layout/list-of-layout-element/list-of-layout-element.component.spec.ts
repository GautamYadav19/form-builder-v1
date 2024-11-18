import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfLayoutElementComponent } from './list-of-layout-element.component';

describe('ListOfLayoutElementComponent', () => {
  let component: ListOfLayoutElementComponent;
  let fixture: ComponentFixture<ListOfLayoutElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfLayoutElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfLayoutElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
