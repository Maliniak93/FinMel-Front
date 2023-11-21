import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MainDashboard } from '../_models/main-dasboard';
import { Observable, map } from 'rxjs';
import { BankAccount, BankAccountDetails } from '../_models/bank-account';
import { Statement, StatementDetails } from '../_models/bank-statement';
import { PaginatedResult } from '../_models/pagination';
import { Specification } from '../_models/specification';
import { StatementTransaction } from '../_models/statement-transaction';
import { TransactionCodes } from '../_models/transaction-codes';

@Injectable({
  providedIn: 'root',
})
export class FinmelService {
  private apiUrl = environment.baseUrl;
  paginatedResultStatement: PaginatedResult<Statement[]> = new PaginatedResult<
    Statement[]
  >();
  paginatedResultTransaction: PaginatedResult<StatementTransaction[]> =
    new PaginatedResult<StatementTransaction[]>();

  constructor(private http: HttpClient) {}

  getMainDashboard(): Observable<MainDashboard> {
    return this.http.get<MainDashboard>(this.apiUrl + '/dashboard');
  }

  getBankAccounts(): Observable<BankAccount[]> {
    return this.http.get<BankAccount[]>(this.apiUrl + '/bank');
  }

  getBankAccountDetails(id: string): Observable<BankAccountDetails> {
    return this.http.get<BankAccountDetails>(this.apiUrl + '/bank/' + id);
  }

  getBankStatements(
    specification: Specification
  ): Observable<PaginatedResult<Statement[]>> {
    let params = new HttpParams();

    if (specification.sort) params = params.append('sort', specification.sort);
    if (specification.searchYear)
      params = params.append('searchYear', specification.searchYear);
    if (specification.pageNumber)
      params = params.append('pageNumber', specification.pageNumber);
    if (specification.pageSize)
      params = params.append('pageSize', specification.pageSize);

    return this.http
      .get<Statement[]>(this.apiUrl + '/statement', {
        observe: 'response',
        params,
      })
      .pipe(
        map((response) => {
          if (response.body) {
            this.paginatedResultStatement.result = response.body;
          }
          const pagination = response.headers.get('Pagination');
          if (pagination) {
            this.paginatedResultStatement.pagination = JSON.parse(pagination);
          }
          return this.paginatedResultStatement;
        })
      );
  }

  getBankStatementDetails(id: string): Observable<StatementDetails> {
    return this.http.get<StatementDetails>(this.apiUrl + '/statement/' + id);
  }

  getBankStatementDetailsTransactions(
    specification: Specification,
    id: string
  ): Observable<PaginatedResult<StatementTransaction[]>> {
    let params = new HttpParams();
    if (specification.sort) params = params.append('sort', specification.sort);
    if (specification.pageNumber)
      params = params.append('pageNumber', specification.pageNumber);
    if (specification.pageSize)
      params = params.append('pageSize', specification.pageSize);
    if (specification.search)
      params = params.append('search', specification.search);

    return this.http
      .get<StatementTransaction[]>(
        this.apiUrl + '/statement/' + id + '/transactions',
        {
          observe: 'response',
          params,
        }
      )
      .pipe(
        map((response) => {
          if (response.body) {
            this.paginatedResultTransaction.result = response.body;
          }
          const pagination = response.headers.get('Pagination');
          if (pagination) {
            this.paginatedResultTransaction.pagination = JSON.parse(pagination);
          }
          return this.paginatedResultTransaction;
        })
      );
  }

  getTransactionCodes(): Observable<TransactionCodes[]> {
    return this.http.get<TransactionCodes[]>(this.apiUrl + '/statement/codes');
  }

  updateTransactionDashboardDate(id: number, newDate: string) {
    const body = { newDate: newDate };
    return this.http.put(
      this.apiUrl + '/Statement/transactions/date/' + id,
      body
    );
  }

  updateTransactionType(id: number, newType: string) {
    const body = { type: newType };
    return this.http.put(
      this.apiUrl + '/statement/transactions/type/' + id,
      body
    );
  }
}
