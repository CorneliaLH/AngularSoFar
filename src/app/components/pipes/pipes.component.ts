import { getLocaleTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { timestamp } from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  birthday: any = new Date(1982, 4, 18, 4, 45);
  birthday40: any = new Date(2022, 4, 18, 4, 45);
  constructor() {}
  today1: any = new Date();
  currentYear: any = this.today1.getFullYear();
  currentMonth: any = this.today1.getMonth();
  ageYear = this.currentYear - this.birthday.getFullYear();

  ageInMilliseconds: number = this.today1 - this.birthday;
  ageInDays: number = this.ageInMilliseconds / 1000 / 60 / 60 / 24;
  ageInYears: number = this.ageInMilliseconds / 1000 / 60 / 60 / 24 / 365;

  today2: any;
  countdown: any;
  days: any;
  hours: any;
  minutes: any;
  seconds: any;

  ngOnInit() {
    setInterval(() => {
      this.today2 = new Date();
      this.countdown = this.birthday40.getTime() - this.today2.getTime();

      this.days = Math.floor(this.countdown / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (this.countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      this.minutes = Math.floor(
        (this.countdown % (1000 * 60 * 60)) / (1000 * 60)
      );
      this.seconds = Math.floor((this.countdown % (1000 * 60)) / 1000);

      return;
    }, 1000);
  }
}
