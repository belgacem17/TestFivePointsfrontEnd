import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SujetComponent } from './sujet/sujet.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddSujetComponent } from './dashboard/add-sujet/add-sujet.component';
import { ShowSujetComponent } from './dashboard/show-sujet/show-sujet.component';

const routes: Routes = [ {
  path: '',
  redirectTo: 'login',
  pathMatch: 'full',
}, { path: 'login' , component: LoginComponent},
{path: 'Register', component: RegisterComponent},
{ path: 'dashboard', component: DashboardComponent ,
  children: [
  { path: 'add', component: AddSujetComponent },
  { path: 'show', component: ShowSujetComponent }
  ] }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
