import { TestBed } from '@angular/core/testing';

import { EstadosUIService } from './estados-ui.service';

describe('EstadosUIService', () => {
  let service: EstadosUIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstadosUIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
