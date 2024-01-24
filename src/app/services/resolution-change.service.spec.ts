import { TestBed } from '@angular/core/testing';

import { ResolutionChangeService } from './resolution-change.service';

describe('ResolutionChangeService', () => {
  let service: ResolutionChangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResolutionChangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
