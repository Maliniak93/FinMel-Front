import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinmelRoutingModule } from './finmel-routing.module';
import { FinmelComponent } from './finmel.component';
import { TopComponent } from './top/top.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashoardMainComponent } from './dashoard-main/dashoard-main.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BankComponent } from './bank/bank.component';

@NgModule({
  declarations: [
    FinmelComponent,
    TopComponent,
    SidebarComponent,
    DashoardMainComponent,
    BankComponent,
  ],
  imports: [
    CommonModule,
    FinmelRoutingModule,
    RouterModule,
    FontAwesomeModule,
    BsDropdownModule,
  ],
})
export class FinmelModule {}
