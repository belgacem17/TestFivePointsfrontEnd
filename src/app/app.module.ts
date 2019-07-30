import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SujetComponent } from './sujet/sujet.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddSujetComponent } from './dashboard/add-sujet/add-sujet.component';
import { ShowSujetComponent } from './dashboard/show-sujet/show-sujet.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SujetComponent,
    DashboardComponent,
    AddSujetComponent,
    ShowSujetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
