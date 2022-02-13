import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Animal } from 'src/app/models/Animal';

@Component({
  selector: 'app-print-animal',
  templateUrl: './print-animal.component.html',
  styleUrls: ['./print-animal.component.css'],
})
export class PrintAnimalComponent implements OnInit {
  @Input() animal: Animal = new Animal(
    'Kristofer',
    'Katt',
    33,
    true,
    true,
    false,
    0
  );
  @Output() fed = new EventEmitter<Animal>();
  constructor() {}

  feedAnimal() {
    this.fed.emit(this.animal);
  }

  // arrayLS: any = JSON.parse(localStorage.getItem('id'));

  ngOnInit() {
    // if (localStorage.getItem('id')) {
    // for (let i=0; i<arrayLS.length, i++) {
    // }
    // }
  }
}
