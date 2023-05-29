import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyInformationCardsComponent } from './daily-information-cards.component';

describe('DailyInformationCardsComponent', () => {
  let component: DailyInformationCardsComponent;
  let fixture: ComponentFixture<DailyInformationCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailyInformationCardsComponent],
    });
    fixture = TestBed.createComponent(DailyInformationCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
