import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLayoutElementsComponent } from './edit-layout-elements.component';

describe('EditLayoutElementsComponent', () => {
  let component: EditLayoutElementsComponent;
  let fixture: ComponentFixture<EditLayoutElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLayoutElementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLayoutElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
