import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

// routings for individual modules
const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "list" },{
  path: "list",
  component: DashboardComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
