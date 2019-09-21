import { ChatbotComponent } from './chatbot/chatbot.component';
import { CheckinspecificComponent } from './checkinspecific/checkinspecific.component';
import { CheckinComponent } from './checkin/checkin.component';
import { AuthGuard } from './auth.guard';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { NotifyExecutiveComponent } from './notify-executive/notify-executive.component';


const routes: Routes = [
  {path: 'home', component : HomeComponent},
  {path: 'chatbot', component : ChatbotComponent},
  {path: 'NotifyExecutive', component : NotifyExecutiveComponent},
  {path: 'locate', component : CheckinComponent},
  {path: 'checkin', component : CheckinspecificComponent},
  {path: 'transactions', component: TransactionsComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginpageComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
