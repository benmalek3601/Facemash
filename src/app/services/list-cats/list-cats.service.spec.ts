import { TestBed } from '@angular/core/testing';

import { ListCatsService } from './list-cats.service';

describe('ListCatsService', () => {
  let service: ListCatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListCatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
