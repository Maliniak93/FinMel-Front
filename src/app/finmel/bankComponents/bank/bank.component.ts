import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountTypeNames, BankAccount } from 'src/app/_models/bank-account';
import { FinmelService } from 'src/app/_services/finmel.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss'],
})
export class BankComponent implements OnInit {
  bankAccounts: BankAccount[] = [];

  constructor(
    private bankAccouintService: FinmelService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadBakAccounts();
  }

  loadBakAccounts() {
    this.bankAccouintService.getBankAccounts().subscribe({
      next: (response) => {
        this.bankAccounts = response;
      },
      error: (error) => console.log(error),
    });
  }

  getAccountTypeLabel(accountType: number): string {
    return AccountTypeNames[accountType];
  }

  navigateToBankDetails(id: number) {
    this.router.navigateByUrl('finmel/bank/' + id);
  }
}
