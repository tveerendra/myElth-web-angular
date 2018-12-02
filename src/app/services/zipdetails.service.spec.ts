import { TestBed } from '@angular/core/testing';

import { ZipDetailsService } from './zipdetails.service';

describe('ZipDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZipDetailsService = TestBed.get(ZipDetailsService);
    expect(service).toBeTruthy();
  });
});
