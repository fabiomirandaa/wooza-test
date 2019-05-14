import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { PlatformService } from '../../core/services/platform.service';
import { CardActionComponent } from '../../shared/components/card-action/card-action.component';

@NgModule({
    declarations: [
        HomeComponent,
        CardActionComponent
    ],
    imports: [
        CardActionComponent
    ],
    providers: [
        PlatformService
    ]
})
export class HomeModule { }
