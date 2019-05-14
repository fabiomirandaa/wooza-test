import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlansComponent } from './plans.component';
import { PlatformService } from '../../core/services/platform.service';
import { RouterModule } from '@angular/router';
import { routes } from './plans.routing';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        PlansComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule
    ],
    providers: [
        PlatformService
    ]
})
export class PlansModule { }
