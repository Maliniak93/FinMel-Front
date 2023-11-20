export interface StatementTransaction {
  id: number;
  bankStatementId: number;
  transactionDate: string;
  dashboardDate: string;
  value: number;
  realValue: number;
  description: string;
  type: string;
  transactionCode: string;
}
