import 'jasmine';
import { TestBed } from '@angular/core/testing';

import { DashboardService } from './dashboard.service';
import { HttpClientModule } from '@angular/common/http';

describe('DashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientModule]
  }));

  it('should be created dashbaord service instance', () => {
    const service: DashboardService = TestBed.get(DashboardService);
    expect(service).toBeTruthy();
  });

  // check API calls
  it('should be called dashbaord service with 100 limit data and get status 200', () => {
    const service: DashboardService = TestBed.get(DashboardService);
    service.getLaunchList(new Object({limit:100})).subscribe(response=>{
      console.log(`SHIVA: response`, response);
      expect(response).toBeTruthy();
    }, err=>{
      expect(err).toBeFalsy();
    });
  });


});
