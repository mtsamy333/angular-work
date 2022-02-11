import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { PaymentComponent } from './payment/payment.component';
import { CheckBalanceComponent } from './check-balance/check-balance.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  AddAccountComponent,
    PaymentComponent,
    CheckBalanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
