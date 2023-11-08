import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    BsDropdownModule,
    FontAwesomeModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
    PaginationModule.forRoot(),
  ],
  exports: [
    FormsModule,
    BsDropdownModule,
    ToastrModule,
    FontAwesomeModule,
    PaginationModule,
  ],
})
export class SharedModule {}
