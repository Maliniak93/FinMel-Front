import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinmelComponent } from './finmel.component';
import { DashoardMainComponent } from './dashoard-main/dashoard-main.component';
import { BankComponent } from './bankComponents/bank/bank.component';
import { authGuard } from '../_guards/auth.guard';
import { StatementComponent } from './bankComponents/statement/statement.component';

const routes: Routes = [
  {
    path: 'finmel',
    component: FinmelComponent,
    canActivate: [authGuard],
    children: [
      { path: '', component: DashoardMainComponent },
      { path: 'bank', component: BankComponent },
      { path: 'statement', component: StatementComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinmelRoutingModule {}
