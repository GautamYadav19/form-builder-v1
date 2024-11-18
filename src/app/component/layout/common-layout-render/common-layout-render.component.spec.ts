import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonLayoutRenderComponent } from './common-layout-render.component';

describe('CommonLayoutRenderComponent', () => {
  let component: CommonLayoutRenderComponent;
  let fixture: ComponentFixture<CommonLayoutRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonLayoutRenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonLayoutRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
