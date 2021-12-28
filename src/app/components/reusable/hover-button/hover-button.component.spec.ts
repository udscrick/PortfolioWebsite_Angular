import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverButtonComponent } from './hover-button.component';

describe('HoverButtonComponent', () => {
  let component: HoverButtonComponent;
  let fixture: ComponentFixture<HoverButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoverButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoverButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
