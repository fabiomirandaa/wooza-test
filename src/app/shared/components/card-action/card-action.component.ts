import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-action',
  templateUrl: './card-action.component.html',
  styleUrls: ['./card-action.component.scss']
})
export class CardActionComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() textButton: string;
  @Input() url: string;

  constructor() { }

  ngOnInit() { }

}
