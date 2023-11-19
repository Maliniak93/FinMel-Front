import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  pageSizeOptions = [
    { size: '10', value: 10 },
    { size: '15', value: 15 },
    { size: '20', value: 20 },
    { size: '30', value: 30 },
  ];

  searchYearOptions = [
    { year: '2023', value: 2023 },
    { year: '2022', value: 2022 },
  ];

  constructor() {}
}
