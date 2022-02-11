import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './add-account/add-account.component';
import { BalanceCheckComponent } from './check-balance/check-balance.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
 {
   path: 'add-account',
   component: Add
 },
 {
   path: 'payment',
   component: PaymentComponent
 },
 {
   path: 'check-balance',
   component: BalanceCheckComponent,
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
