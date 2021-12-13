import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

import { FlowService } from './flow.service';

describe('FlowService', () => {
  let service: FlowService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        HttpClientModule
      ], 
        providers: [FlowService]
    });
    service = TestBed.inject(FlowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be 5', function () {
    service.getProduct(5).subscribe(value => {
      expect(value['id']).toBe(5)
    })
  });

  it('should be error 400', function () {
    service.postProduct(null).subscribe(value => {
      // Value is null because body is not parsed
      expect(value).toBeNull()
    },error => {
    })
  });
});
