export interface Statement {
  id: number;
  statementNumber: string;
  statementFrom: string;
  statementTo: string;
  bankAccountId: number;
  bankAccountName: string;
}

export interface StatementDetails {
  id: number;
  statementNumber: string;
  statementFrom: string;
  beginValue: number;
  statementTo: string;
  endValue: number;
}
