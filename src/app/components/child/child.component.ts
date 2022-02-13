import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  constructor() {}
  text1: string = '';
  text2: string = '';
  text3: string = '';

  ngOnInit(): void {}
  childFunction1(event: any) {
    console.log(event.key);
    this.text1 += event.key;
  }
  childFunction2(event: KeyboardEvent) {
    console.log(event);
    this.text2 += event.key;
  }

  childFunction3(value: string) {
    this.text3 += value;
  }
}
