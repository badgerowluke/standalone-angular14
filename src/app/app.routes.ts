import { Routes } from '@angular/router'
import { AuthGuard } from 'control-flow'

export const routes: Routes = [

    { path: 'dashboard', canActivate: [AuthGuard], loadComponent: () => import('dashboard')
                                                                        .then(v => v.DashboardComponent) },
    { path: '**', pathMatch: 'full', redirectTo: 'dashboard' }
]