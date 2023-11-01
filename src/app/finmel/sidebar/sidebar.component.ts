import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faBuildingColumns,
  faFile,
  faGear,
  faMoneyBill,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(
    private library: FaIconLibrary,
    private accountService: AccountService
  ) {
    library.addIcons(
      faBuildingColumns,
      faMoneyBill,
      faFile,
      faGear,
      faRightFromBracket
    );
  }

  logout() {
    this.accountService.logout();
  }
}
