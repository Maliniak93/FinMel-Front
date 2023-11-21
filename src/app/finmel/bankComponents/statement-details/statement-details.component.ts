import { transition } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { StatementDetails } from 'src/app/_models/bank-statement';
import { Pagination } from 'src/app/_models/pagination';
import { Specification } from 'src/app/_models/specification';
import { StatementTransaction } from 'src/app/_models/statement-transaction';
import { FinmelService } from 'src/app/_services/finmel.service';
import { SharedService } from 'src/app/_services/shared.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-statement-details',
  templateUrl: './statement-details.component.html',
  styleUrls: ['./statement-details.component.scss'],
})
export class StatementDetailsComponent implements OnInit {
  statementDetails: StatementDetails | undefined;
  statementDetailsTransactions: StatementTransaction[] = [];
  pagination: Pagination | undefined;
  specification: Specification = new Specification();

  editedTransactionId: number | undefined;
  editingDate: boolean = false;

  constructor(
    private statementService: FinmelService,
    private route: ActivatedRoute,
    public pageSize: SharedService,
    private library: FaIconLibrary,
    private datePipe: DatePipe
  ) {
    library.addIcons(faEllipsis);
  }

  @HostListener('document:keydown.escape', ['$event'])
  handleEscapeKey(event: KeyboardEvent): void {
    this.editingDate = false;
  }

  ngOnInit(): void {
    this.getBankStatements();
    this.getBankStatementDetailsTransactions();
  }

  getBankStatements() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;
    this.statementService.getBankStatementDetails(id).subscribe({
      next: (response) => {
        if (response) {
          this.statementDetails = response;
        }
      },
      error: (error) => console.log(error),
    });
  }

  getBankStatementDetailsTransactions() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;
    this.statementService
      .getBankStatementDetailsTransactions(this.specification, id)
      .subscribe({
        next: (response) => {
          if (response.result && response.pagination) {
            this.statementDetailsTransactions = response.result;
            this.pagination = response.pagination;
          }
        },
        error: (error) => console.log(error),
      });
  }
  pageChanged(event: any) {
    if (this.specification.pageNumber !== event.page) {
      this.specification.pageNumber = event.page;
      this.getBankStatementDetailsTransactions();
    }
  }
  onSearch(text: string) {
    if (text) {
      this.specification.search = text;
      this.getBankStatementDetailsTransactions();
    }
  }

  onReset() {
    this.specification.search = '';
    this.getBankStatementDetailsTransactions();
  }

  onPageSizeSelected(event: any) {
    this.specification.pageSize = Number(event.target.value);
    this.getBankStatementDetailsTransactions();
  }

  enableDataEditing(transactionId: number) {
    this.editingDate = true;
    this.editedTransactionId = transactionId;
  }

  onDateChanged(newDate: string) {
    const formattedDate = this.datePipe.transform(newDate, 'yyyy-MM-dd');
    if (this.editedTransactionId && formattedDate) {
      this.statementService
        .updateTransactionDashboardDate(this.editedTransactionId, formattedDate)
        .subscribe({
          error: (error) => console.error(error),
        });
      this.editingDate = !this.editingDate;
    }
  }
}
