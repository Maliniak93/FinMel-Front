import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinmelComponent } from './finmel.component';

describe('FinmelComponent', () => {
  let component: FinmelComponent;
  let fixture: ComponentFixture<FinmelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinmelComponent]
    });
    fixture = TestBed.createComponent(FinmelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
