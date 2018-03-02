import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopicComponent } from './topic/topic.component';


export const routes: Routes = [
    { path: 'topic', component: TopicComponent },
    { path: '', pathMatch: 'full', redirectTo: '/topic' },
    { path: 'topic', pathMatch: 'full', redirectTo: '/topic' },
    { path: '**', pathMatch: 'full', redirectTo: '/topic' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);


