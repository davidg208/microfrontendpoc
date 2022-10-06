import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPageComponent2 } from './otro-prueba.component';

describe('RegisterPageComponent2', () => {
  let component: RegisterPageComponent2;
  let fixture: ComponentFixture<RegisterPageComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPageComponent2 ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPageComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
