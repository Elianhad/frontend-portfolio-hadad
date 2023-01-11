import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonplusComponent } from './buttonplus.component';

describe('ButtonplusComponent', () => {
  let component: ButtonplusComponent;
  let fixture: ComponentFixture<ButtonplusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonplusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonplusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
