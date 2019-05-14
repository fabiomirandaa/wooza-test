import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { PlanService } from './plan.service';
describe('PlanService', () => {
  let service: PlanService;
  beforeEach(() => {
    const httpClientStub = { get: arg1 => ({ pipe: () => ({}) }) };
    TestBed.configureTestingModule({
      providers: [
        PlanService,
        { provide: HttpClient, useValue: httpClientStub }
      ]
    });
    service = TestBed.get(PlanService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
