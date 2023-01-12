import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonbackComponent } from './buttonback.component';

describe('ButtonbackComponent', () => {
  let component: ButtonbackComponent;
  let fixture: ComponentFixture<ButtonbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
