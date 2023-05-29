import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputExchangeComponent } from './input-exchange.component';

describe('InputExchangeComponent', () => {
  let component: InputExchangeComponent;
  let fixture: ComponentFixture<InputExchangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputExchangeComponent]
    });
    fixture = TestBed.createComponent(InputExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
