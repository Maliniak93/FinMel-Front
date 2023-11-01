import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeRoutingModule } from './home/home-routing.module';
import { FinmelRoutingModule } from './finmel/finmel-routing.module';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomeRoutingModule,
    FinmelRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
