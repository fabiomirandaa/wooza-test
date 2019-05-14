import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPlanComponent } from './form-plan.component';
import { PlatformService } from '../../core/services/platform.service';
import { RouterModule } from '@angular/router';
import { routes } from './form-plan.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { AngularValidateBrLibModule } from 'angular-validate-br';

@NgModule({
    declarations: [
        FormPlanComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        NgxMaskModule.forRoot(),
        AngularValidateBrLibModule
    ],
    providers: [
        PlatformService
    ]
})
export class FormPlanModule { }
