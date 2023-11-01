import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavComponent, HomeComponent, RegisterComponent],
  imports: [CommonModule, HomeRoutingModule, FormsModule],
})
export class HomeModule {}
