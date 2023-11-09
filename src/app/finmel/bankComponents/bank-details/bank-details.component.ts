import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  AccountTypeNames,
  BankAccountDetails,
} from 'src/app/_models/bank-account';
import { FinmelService } from 'src/app/_services/finmel.service';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.scss'],
})
export class BankDetailsComponent implements OnInit {
  bankAccount: BankAccountDetails | undefined;

  constructor(
    private bankAccountService: FinmelService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadBankAccount();
  }

  loadBankAccount() {
    var id = this.route.snapshot.paramMap.get('id');
    if (!id) return;
    this.bankAccountService.getBankAccountDetails(id).subscribe({
      next: (bankAccount) => (this.bankAccount = bankAccount),
    });
  }

  getAccountTypeLabel(accountType: number | undefined): string | undefined {
    if (!accountType) return;
    return AccountTypeNames[accountType];
  }
}
