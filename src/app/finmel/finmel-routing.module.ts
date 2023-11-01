import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinmelComponent } from './finmel.component';
import { DashoardMainComponent } from './dashoard-main/dashoard-main.component';
import { BankComponent } from './bank/bank.component';

const routes: Routes = [
  {
    path: 'finmel',
    component: FinmelComponent,
    children: [
      { path: '', component: DashoardMainComponent },
      { path: 'bank', component: BankComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinmelRoutingModule {}
