import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainComponent } from './main/main.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MedicinesComponent } from './medicines/medicines.component';
import { AppointmentsComponent } from './appointments/appointments.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    HeaderComponent,
    SideNavComponent,
    MainComponent,
    MedicinesComponent,
    AppointmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
