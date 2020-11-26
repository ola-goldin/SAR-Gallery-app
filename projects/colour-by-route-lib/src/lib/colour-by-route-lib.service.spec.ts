import { TestBed } from '@angular/core/testing';

import { ColourByRouteLibService } from './colour-by-route-lib.service';

describe('ColourByRouteLibService', () => {
  let service: ColourByRouteLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColourByRouteLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
