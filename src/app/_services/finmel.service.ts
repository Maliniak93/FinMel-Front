import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MainDashboard } from '../_models/main-dasboard';
import { Observable, map } from 'rxjs';
import { BankAccount, BankAccountDetails } from '../_models/bank-account';
import { Statement } from '../_models/bank-statement';
import { PaginatedResult } from '../_models/pagination';
import { Specification } from '../_models/specification';

@Injectable({
  providedIn: 'root',
})
export class FinmelService {
  private apiUrl = environment.baseUrl;
  paginatedResult: PaginatedResult<Statement[]> = new PaginatedResult<
    Statement[]
  >();

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
            this.paginatedResult.result = response.body;
          }
          const pagination = response.headers.get('Pagination');
          if (pagination) {
            this.paginatedResult.pagination = JSON.parse(pagination);
          }
          return this.paginatedResult;
        })
      );
  }
}
