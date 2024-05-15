import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//... import required components
import { PaymentDetailsComponent } from 'src/app/payment-details/payment-details.component';
import { MsalGuard } from '@azure/msal-angular';
import { PaymentDetailFormComponent } from './payment-details/payment-detail-form/payment-detail-form.component';

const routes: Routes = [
  {
    path: '',
    component: PaymentDetailFormComponent,
    // canActivate: [MsalGuard] 
  },
  {
    path: 'list',
    component: PaymentDetailsComponent,
    canActivate: [MsalGuard] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }