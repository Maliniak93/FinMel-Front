import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StatementDetails } from 'src/app/_models/bank-statement';
import { Pagination } from 'src/app/_models/pagination';
import { Specification } from 'src/app/_models/specification';
import { StatementTransaction } from 'src/app/_models/statement-transaction';
import { FinmelService } from 'src/app/_services/finmel.service';
import { SharedService } from 'src/app/_services/shared.service';

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

  constructor(
    private statementService: FinmelService,
    private route: ActivatedRoute,
    public pageSize: SharedService
  ) {}

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
}
