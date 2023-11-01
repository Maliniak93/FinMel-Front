import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinmelComponent } from './finmel.component';
import { DashoardMainComponent } from './dashoard-main/dashoard-main.component';

const routes: Routes = [
  {
    path: 'finmel',
    component: FinmelComponent,
    children: [{ path: 'main', component: DashoardMainComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinmelRoutingModule {}
