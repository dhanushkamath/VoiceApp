import { AuthGuard } from './auth.guard';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'


const routes: Routes = [
  {path: 'home', component : HomeComponent},
  {path: 'transactions', component: TransactionsComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginpageComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
