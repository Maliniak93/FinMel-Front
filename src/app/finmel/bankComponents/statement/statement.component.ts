import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { Statement } from 'src/app/_models/bank-statement';
import { Pagination } from 'src/app/_models/pagination';
import { Specification } from 'src/app/_models/specification';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';
import { FinmelService } from 'src/app/_services/finmel.service';
import { SharedService } from 'src/app/_services/shared.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.scss'],
})
export class StatementComponent implements OnInit {
  statements: Statement[] = [];
  pagination: Pagination | undefined;
  specification: Specification = new Specification();
  user: User | undefined;
  uploader: FileUploader | undefined;
  hasBaseDropZoneOver = false;
  baseUrl = environment.baseUrl;

  constructor(
    private statementService: FinmelService,
    private router: Router,
    public sharedService: SharedService,
    private accountService: AccountService,
    private toastr: ToastrService
  ) {
    this.accountService.currentUser$.pipe(take(1)).subscribe({
      next: (user) => {
        if (user) this.user = user;
      },
    });
  }

  ngOnInit(): void {
    this.getBankStatements();
    this.initializeUploader();
  }

  getBankStatements() {
    this.statementService.getBankStatements(this.specification).subscribe({
      next: (response) => {
        if (response.result && response.pagination) {
          this.statements = response.result;
          this.pagination = response.pagination;
        }
      },
      error: (error) => console.log(error),
    });
  }
  pageChanged(event: any) {
    if (this.specification.pageNumber !== event.page) {
      this.specification.pageNumber = event.page;
      this.getBankStatements();
    }
  }

  navigateToStatementDetails(id: number) {
    this.router.navigateByUrl('finmel/statement/' + id);
  }

  onSortSelected(event: any) {
    this.specification.sort = event.target.value;
    this.getBankStatements();
  }
  onPageSizeSelected(event: any) {
    this.specification.pageSize = Number(event.target.value);
    this.getBankStatements();
  }

  onYearSearch(event: any) {
    this.specification.searchYear = Number(event.target.value);
    this.getBankStatements();
  }

  initializeUploader() {
    this.uploader = new FileUploader({
      url: this.baseUrl + '/statement',
      authToken: 'Bearer ' + this.user?.token,
      allowedMimeType: ['text/xml'],
      isHTML5: true,
      removeAfterUpload: true,
      autoUpload: false,
    });

    this.uploader.onSuccessItem = (item, response, status, headers) => {
      if (response) {
        this.toastr.success('Success!');
      }
    };

    this.uploader.onCompleteAll = () => {
      this.getBankStatements();
    };

    this.uploader.onErrorItem = (item, response, status, header) => {
      if (response) {
        const errorResponse = JSON.parse(response);
        const detailMessage = errorResponse.detail;

        this.toastr.error(detailMessage);
        console.log(response);
      }
    };
  }
}
