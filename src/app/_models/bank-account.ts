import { StatementDetails } from './bank-statement';

export interface BankAccount {
  id: number;
  accountNumber: string;
  accountName: string;
  balance: number;
  currencyTag: string;
  accountType: number;
}

export interface BankAccountDetails {
  id: number;
  accountNumber: string;
  balance: number;
  clientNumber: string;
  clientName: string;
  accountName: string;
  currency: string;
  intrestRate: string;
  accountType: number;
  bankStatements: StatementDetails[];
}

export const AccountTypeNames: Record<number, string> = {
  0: 'Normal',
  1: 'Savings',
};
