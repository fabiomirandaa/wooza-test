import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PlatformService } from '../../core/services/platform.service';
import { PlanService } from '../../core/services/plan.service';
import { ActivatedRoute } from '@angular/router';
import { PlansComponent } from './plans.component';
describe('PlansComponent', () => {
  let component: PlansComponent;
  let fixture: ComponentFixture<PlansComponent>;
  beforeEach(() => {
    const platformServiceStub = {
      getSelectedPlatfom: platformName1 => ({ sku: {} })
    };
    const planServiceStub = { getPlans: arg1 => ({ toPromise: () => ({}) }) };
    const activatedRouteStub = {
      snapshot: { firstChild: { url: { path: {} } } }
    };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [PlansComponent],
      providers: [
        { provide: PlatformService, useValue: platformServiceStub },
        { provide: PlanService, useValue: planServiceStub },
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
    });
    fixture = TestBed.createComponent(PlansComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
