import { TestBed } from '@angular/core/testing';

import { DataClubService } from './data-club.service';

describe('DataClubService', () => {
  let service: DataClubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataClubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
