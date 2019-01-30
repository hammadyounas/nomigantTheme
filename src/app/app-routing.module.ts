import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Containers , DashboardContainer} from './container/index'


const routes: Routes = [
  { path: '' , redirectTo : '/dashboard', pathMatch: 'full' },
  { path: "dashboard", component: DashboardContainer },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
