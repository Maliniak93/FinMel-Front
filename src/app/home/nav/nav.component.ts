import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  model: any = {};

  constructor(
    public accountService: AccountService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {}

  login() {
    this.accountService.login(this.model).subscribe({
      next: () => {},
      error: (error) => {
        this.toastrService.error('Email address or password is incorrect'),
          console.log(error);
      },
    });
  }

  logout() {
    this.accountService.logout();
  }
}
