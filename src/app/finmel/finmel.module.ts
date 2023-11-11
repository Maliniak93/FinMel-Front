import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinmelRoutingModule } from './finmel-routing.module';
import { FinmelComponent } from './finmel.component';
import { TopComponent } from './top/top.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashoardMainComponent } from './dashoard-main/dashoard-main.component';
import { BankComponent } from './bankComponents/bank/bank.component';
import { StatementComponent } from './bankComponents/statement/statement.component';
import { SharedModule } from '../_modules/shared.module';
import { BankDetailsComponent } from './bankComponents/bank-details/bank-details.component';
import { StatementDetailsComponent } from './bankComponents/statement-details/statement-details.component';

@NgModule({
  declarations: [
    FinmelComponent,
    TopComponent,
    SidebarComponent,
    DashoardMainComponent,
    BankComponent,
    StatementComponent,
    BankDetailsComponent,
    StatementDetailsComponent,
  ],
  imports: [CommonModule, FinmelRoutingModule, SharedModule],
})
export class FinmelModule {}
