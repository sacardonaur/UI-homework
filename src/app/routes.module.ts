import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollectiveLearningComponent } from './collectiveLearning/collectiveLearning.component';


export const routes: Routes = [
    { path: 'collectiveLearning', component: CollectiveLearningComponent },
    { path: '', pathMatch: 'full', redirectTo: '/collectiveLearning' },
    { path: 'collectiveLearning', pathMatch: 'full', redirectTo: '/collectiveLearning' },
    { path: '**', pathMatch: 'full', redirectTo: '/collectiveLearning' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);


