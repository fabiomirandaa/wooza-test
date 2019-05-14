import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardActionComponent } from './components/card-action/card-action.component';
import { PricePlanComponent } from './components/price-plan/price-plan.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        CardActionComponent,
        PricePlanComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule,
        FormsModule,
    ],
    exports: [
        CardActionComponent,
        PricePlanComponent
    ],
    providers: []
})
export class SharedModule { }
