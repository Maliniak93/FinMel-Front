import { Component, OnInit } from '@angular/core';
import { MainDashboard } from 'src/app/_models/main-dasboard';
import { FinmelService } from 'src/app/_services/finmel.service';

@Component({
  selector: 'app-dashoard-main',
  templateUrl: './dashoard-main.component.html',
  styleUrls: ['./dashoard-main.component.scss'],
})
export class DashoardMainComponent implements OnInit {
  mainDashboard: MainDashboard = {} as MainDashboard;

  constructor(private finmelService: FinmelService) {}

  ngOnInit(): void {
    this.loadMainDashboard;
  }

  loadMainDashboard() {
    this.finmelService.getMainDashboard().subscribe((data) => {
      this.mainDashboard = data;
    });
  }
}
