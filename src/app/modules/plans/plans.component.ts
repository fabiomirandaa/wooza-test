import { Component, OnInit } from '@angular/core';
import { PlatformService } from '../../core/services/platform.service';
import { PlanService } from '../../core/services/plan.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {
  plans: any;

  constructor(
    private platformService: PlatformService,
    private planService: PlanService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.getPlans();
  }

  private async getPlans() {
    const platformName = this.route.snapshot.firstChild.url[0].path;
    const platformSelected = this.platformService.getSelectedPlatfom(platformName);
    this.planService.getPlans(platformSelected.sku)
      .pipe(
        map(item => {
          return item.filter(plan => plan.ativo === true);
        })
      )
      .subscribe(res => {
        this.plans = res;
      });
  }

}
