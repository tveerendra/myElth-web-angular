import { TestBed } from '@angular/core/testing';

import { CoverageService } from './coverage.service';

describe('CoverageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoverageService = TestBed.get(CoverageService);
    expect(service).toBeTruthy();
  });
});
