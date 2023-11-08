import { Component, OnInit } from '@angular/core';
import { Statement } from 'src/app/_models/bank-statement';
import { Pagination } from 'src/app/_models/pagination';
import { Specification } from 'src/app/_models/specification';
import { FinmelService } from 'src/app/_services/finmel.service';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.scss'],
})
export class StatementComponent implements OnInit {
  statements: Statement[] = [];
  pagination: Pagination | undefined;
  specification: Specification = new Specification();
  smallnumPages = 0;

  constructor(private statementService: FinmelService) {}

  ngOnInit(): void {
    this.getBankStatements();
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

  onSortSelected(event: any) {
    this.specification.sort = event.target.value;
    this.getBankStatements();
  }
}
