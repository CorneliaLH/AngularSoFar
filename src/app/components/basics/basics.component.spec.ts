import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicsComponent } from './basics.component';

describe('BasicsComponent', () => {
  let component: BasicsComponent;
  let fixture: ComponentFixture<BasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should toggle isMarried', () => {
    expect(component.isMarried).toBeFalse();
    component.getMarried();
    fixture.detectChanges();
    expect(component.isMarried).toBeTrue();
  });
});
