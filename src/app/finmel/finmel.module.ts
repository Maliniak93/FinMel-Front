import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinmelRoutingModule } from './finmel-routing.module';
import { FinmelComponent } from './finmel.component';
import { TopComponent } from './top/top.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashoardMainComponent } from './dashoard-main/dashoard-main.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    FinmelComponent,
    TopComponent,
    SidebarComponent,
    DashoardMainComponent,
  ],
  imports: [CommonModule, FinmelRoutingModule, RouterModule, FontAwesomeModule],
})
export class FinmelModule {}
