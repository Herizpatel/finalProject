import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {ErrorComponent} from "./error/error.component";
import {VehiclelistcomponentComponent} from "./vehiclelistcomponent/vehiclelistcomponent.component";

const routes: Routes = [
  {path: '', component: HeaderComponent}, // This will navigate to header page
  {path: 'error', component: ErrorComponent},// This will navigate to error page
  {path: 'vehicleList', component: VehiclelistcomponentComponent},// This will navigate to vehicle list page
  {path: '**', redirectTo: 'error'}// This will navigate to error
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
