import { TestBed } from '@angular/core/testing';

import { PesquisarapiService } from './pesquisarapi.service';

describe('PesquisarapiService', () => {
  let service: PesquisarapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PesquisarapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
