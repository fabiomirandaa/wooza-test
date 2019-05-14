import { Routes } from '@angular/router';
import { PlansComponent } from './plans.component';

export const routes: Routes = [
    {
        path: '',
        component: PlansComponent,
        children: [
            {
                path: 'computador',
                loadChildren: './plans.module#PlansModule'
            },
            {
                path: 'tablet',
                loadChildren: './plans.module#PlansModule'
            },
            {
                path: 'wi-fi',
                loadChildren: './plans.module#PlansModule'
            }
        ]
    }
];
