import { TestBed } from '@angular/core/testing';

import { RegisterServerService } from './register-server.service';

describe('RegisterServerService', () => {
  let service: RegisterServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
