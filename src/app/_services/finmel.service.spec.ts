import { TestBed } from '@angular/core/testing';

import { FinmelService } from './finmel.service';

describe('FinmelService', () => {
  let service: FinmelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinmelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
