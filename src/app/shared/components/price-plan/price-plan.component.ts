import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-price-plan',
  templateUrl: './price-plan.component.html',
  styleUrls: ['./price-plan.component.scss']
})
export class PricePlanComponent implements OnInit {
  @Input() value: string;
  @Input() franchise: string;
  @Input() textButton: string;
  @Input() url: string;

  constructor() { }

  ngOnInit() { }

}
