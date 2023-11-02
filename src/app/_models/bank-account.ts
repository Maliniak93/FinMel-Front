export interface BankAccount {
  id: number;
  accountNumber: string;
  accountName: string;
  balance: number;
  currencyTag: string;
  accountType: number;
}

export const AccountTypeNames: Record<number, string> = {
  0: 'Normal',
  1: 'Savings',
};
