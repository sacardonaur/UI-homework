import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopicsToTeachComponent } from './topicsToTeach/topicsToTeach.component';

export const routes: Routes = [
    { path: 'topics-to-teach', component: TopicsToTeachComponent },
    { path: '', pathMatch: 'full', redirectTo: '/topics-to-teach' },
    { path: 'topics-to-teach', pathMatch: 'full', redirectTo: '/topics-to-teach' },
    { path: '**', pathMatch: 'full', redirectTo: '/topics-to-teach' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);


