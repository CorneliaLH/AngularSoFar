import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/Animal';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css'],
})
export class AnimalsComponent implements OnInit {
  animals: Animal[] = [
    new Animal('Horse', 'Sonny', 34, true, true, false, 0),
    new Animal('Rabbit', 'Julia', 4, false, false, false, 1),
    new Animal('Monkey', 'Lisa', 40, true, false, false, 2),
    new Animal('Bird', 'Jan', 13, false, false, false, 3),
  ];
  constructor() {}

  toggleAnimals() {
    for (let i = 0; i < this.animals.length; i++) {
      this.animals[i].niceAnimal = !this.animals[i].niceAnimal;
    }
  }

  ngOnInit(): void {}
}
