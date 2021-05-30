import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {ErrorComponent} from "./error/error.component";
import {VehiclelistcomponentComponent} from "./vehiclelistcomponent/vehiclelistcomponent.component";

const routes: Routes = [
  {path: '', component: HeaderComponent},
  {path: 'error', component: ErrorComponent},
  {path: 'vehicleList', component: VehiclelistcomponentComponent},
  {path: '**', redirectTo: 'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
