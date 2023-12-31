import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  bankAccount: BankAccountDetails = {} as BankAccountDetails;

  constructor(
    private bankAccountService: FinmelService,
    private route: ActivatedRoute,
    private router: Router
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

  getAccountTypeLabel(accountType: number): string {
    return AccountTypeNames[accountType];
  }

  navigateToStatementDetails(id: number) {
    this.router.navigateByUrl('finmel/statement/' + id);
  }
}
