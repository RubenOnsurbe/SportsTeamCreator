import { TestBed } from '@angular/core/testing';

import { ControlUsersService } from './control-users.service';

describe('ControlUsersService', () => {
  let service: ControlUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
