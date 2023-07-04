import { TestBed } from '@angular/core/testing';

import { ServicieService } from './service.service';

describe('ServicieService', () => {
  let service: ServicieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
