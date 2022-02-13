import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsComponent } from './animals.component';

describe('AnimalsComponent', () => {
  let component: AnimalsComponent;
  let fixture: ComponentFixture<AnimalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnimalsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change who is nice', () => {
    expect(component.animals[0 && 2].niceAnimal).toBeTrue();
    expect(component.animals[1 && 3].niceAnimal).toBeFalse();

    component.toggleAnimals();

    fixture.detectChanges();
    expect(component.animals[0 && 2].niceAnimal).toBeFalse();
    expect(component.animals[1 && 3].niceAnimal).toBeTrue();
  });
});
