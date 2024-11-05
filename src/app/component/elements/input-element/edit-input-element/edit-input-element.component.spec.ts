import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInputElementComponent } from './edit-input-element.component';

describe('EditInputElementComponent', () => {
  let component: EditInputElementComponent;
  let fixture: ComponentFixture<EditInputElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInputElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInputElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
