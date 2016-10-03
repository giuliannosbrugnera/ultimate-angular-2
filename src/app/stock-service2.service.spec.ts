/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StockService2Service } from './stock-service2.service';

describe('Service: StockService2', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StockService2Service]
    });
  });

  it('should ...', inject([StockService2Service], (service: StockService2Service) => {
    expect(service).toBeTruthy();
  }));
});
