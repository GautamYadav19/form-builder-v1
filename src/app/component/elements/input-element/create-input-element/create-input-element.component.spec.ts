import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInputElementComponent } from './create-input-element.component';

describe('CreateInputElementComponent', () => {
  let component: CreateInputElementComponent;
  let fixture: ComponentFixture<CreateInputElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateInputElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInputElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
