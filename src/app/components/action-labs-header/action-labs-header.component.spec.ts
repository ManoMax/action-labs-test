import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionLabsHeaderComponent } from './action-labs-header.component';

describe('ActionLabsHeaderComponent', () => {
  let component: ActionLabsHeaderComponent;
  let fixture: ComponentFixture<ActionLabsHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionLabsHeaderComponent]
    });
    fixture = TestBed.createComponent(ActionLabsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
