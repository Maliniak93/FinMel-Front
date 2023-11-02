import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinmelRoutingModule } from './finmel-routing.module';
import { FinmelComponent } from './finmel.component';
import { TopComponent } from './top/top.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashoardMainComponent } from './dashoard-main/dashoard-main.component';
import { BankComponent } from './bank/bank.component';
import { StatementComponent } from './statement/statement.component';
import { SharedModule } from '../_modules/shared.module';

@NgModule({
  declarations: [
    FinmelComponent,
    TopComponent,
    SidebarComponent,
    DashoardMainComponent,
    BankComponent,
    StatementComponent,
  ],
  imports: [CommonModule, FinmelRoutingModule, SharedModule],
})
export class FinmelModule {}
