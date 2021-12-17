import { TestBed } from '@angular/core/testing';

import { CreateventService } from './createvent.service';

describe('CreateventService', () => {
  let service: CreateventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
