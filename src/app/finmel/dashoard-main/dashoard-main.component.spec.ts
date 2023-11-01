import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashoardMainComponent } from './dashoard-main.component';

describe('DashoardMainComponent', () => {
  let component: DashoardMainComponent;
  let fixture: ComponentFixture<DashoardMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashoardMainComponent]
    });
    fixture = TestBed.createComponent(DashoardMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
