import { TestBed } from '@angular/core/testing';

import { UniversityService } from './university.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('UniversityService', () => {
  let service: UniversityService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(UniversityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
