import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    FontAwesomeModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
    PaginationModule.forRoot(),
    ButtonsModule.forRoot(),
    TooltipModule.forRoot(),
    FileUploadModule,
    BsDatepickerModule.forRoot(),
  ],
  exports: [
    FormsModule,
    BrowserAnimationsModule,
    BsDropdownModule,
    FontAwesomeModule,
    ToastrModule,
    PaginationModule,
    ButtonsModule,
    TooltipModule,
    FileUploadModule,
    BsDatepickerModule,
  ],
  providers: [DatePipe],
})
export class SharedModule {}
