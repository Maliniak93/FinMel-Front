import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinmelComponent } from './finmel.component';
import { DashoardMainComponent } from './dashoard-main/dashoard-main.component';
import { BankComponent } from './bankComponents/bank/bank.component';
import { authGuard } from '../_guards/auth.guard';
import { StatementComponent } from './bankComponents/statement/statement.component';
import { BankDetailsComponent } from './bankComponents/bank-details/bank-details.component';
import { StatementDetailsComponent } from './bankComponents/statement-details/statement-details.component';

const routes: Routes = [
  {
    path: 'finmel',
    component: FinmelComponent,
    canActivate: [authGuard],
    children: [
      { path: '', component: DashoardMainComponent },
      { path: 'bank', component: BankComponent },
      { path: 'bank/:id', component: BankDetailsComponent },
      { path: 'statement', component: StatementComponent },
      { path: 'statement/:id', component: StatementDetailsComponent },
      { path: '**', component: DashoardMainComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinmelRoutingModule {}
