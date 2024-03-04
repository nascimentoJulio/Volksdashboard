import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { AdminComponent } from './screens/admin/admin.component';
import { ReportsComponent } from './screens/reports/reports.component';
import { NgModule } from '@angular/core';
import { carResolver } from './resolver/car.resolver';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'admin', component: AdminComponent},
    { path: 'reports', component: ReportsComponent, resolve: carResolver }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingModule {}