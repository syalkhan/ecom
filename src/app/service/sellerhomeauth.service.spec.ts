import { TestBed } from '@angular/core/testing';

import { SellerhomeauthService } from './sellerhomeauth.service';

describe('SellerhomeauthService', () => {
  let service: SellerhomeauthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellerhomeauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
