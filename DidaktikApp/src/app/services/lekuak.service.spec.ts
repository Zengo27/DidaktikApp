import { TestBed } from '@angular/core/testing';

import { LekuakService } from './lekuak.service';

describe('LekuakService', () => {
  let service: LekuakService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LekuakService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
