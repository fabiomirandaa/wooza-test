import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { PlatformService } from '../../core/services/platform.service';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
    ],
    providers: [
        PlatformService
    ]
})
export class HomeModule { }
