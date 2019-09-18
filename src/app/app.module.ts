import { AuthGuard } from './auth.guard';
import { TransactionsService } from './transactions.service';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginformComponent } from './loginform/loginform.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterinfoComponent } from './footerinfo/footerinfo.component';
import { GetintouchComponent } from './getintouch/getintouch.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginformComponent,
    FooterinfoComponent,
    GetintouchComponent,
    TransactionsComponent,
    LoginpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuard, TransactionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
