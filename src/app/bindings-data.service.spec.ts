import { TestBed } from '@angular/core/testing';

import { BindingsDataService } from './bindings-data.service';

describe('BindingsDataService', () => {
  let service: BindingsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BindingsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
