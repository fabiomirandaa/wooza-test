import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlansComponent } from './plans.component';
import { PlatformService } from '../../core/services/platform.service';
import { RouterModule } from '@angular/router';
import { routes } from './plans.routing';

@NgModule({
    declarations: [
        PlansComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    providers: [
        PlatformService
    ]
})
export class PlansModule { }
