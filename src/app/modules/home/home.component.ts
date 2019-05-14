import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

import { PlatformService } from '../../core/services/platform.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  platforms: any;

  constructor(private platformService: PlatformService) {

  }

  ngOnInit() {
    this.platformService.getAllPlatforms()
      .pipe(take(1))
      .subscribe((item: any) => {
        this.platforms = item.plataformas;
        console.log(this.platforms);
      });
  }

}
