import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { MainComponent } from './main/main.component';
import { MedicinesComponent } from './medicines/medicines.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'home', component: MainComponent },
      { path: 'appointments', component: AppointmentsComponent },
      { path: 'medicines', component: MedicinesComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
