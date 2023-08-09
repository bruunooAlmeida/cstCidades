import { TestBed } from '@angular/core/testing';

import { CstCidadesService } from './cst-cidades.service';

describe('CstCidadesService', () => {
  let service: CstCidadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CstCidadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
