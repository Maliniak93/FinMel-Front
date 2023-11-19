export interface StatementTransaction {
  id: number;
  bankStatementId: number;
  executionDate: string;
  value: number;
  realValue: number;
  description: string;
  type: string;
  transactionCode: string;
}
