import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/models/Animal';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css'],
})
export class InputOutputComponent implements OnInit {
  numberFed: number = 0;
  animals: Animal[] = [
    new Animal('Turtle', 'Sebastian', 40, true, true, false, 0),
    new Animal('Zebra', 'Kristofer', 43, true, true, false, 1),
    new Animal('Monkey', 'July', 3, false, true, false, 2),
    new Animal('Tiger', 'Emilie', 39, false, true, false, 3),
    new Animal('Dolphin', 'Max', 4, true, true, false, 4),
    new Animal('Eagle', 'Maria', 40, true, false, false, 5),
  ];
  constructor() {}
  thisAnimalIsFed(value: Animal) {
    if (value.isFed === false) {
      value.isFed = true;
      this.numberFed += 1;
    } else {
      value.isFed = false;
      this.numberFed -= 1;
    }
  }

  getArrayFromLs() {
    let collectedUsersList = localStorage.getItem('myAnimal');

    let id = [];

    if (collectedUsersList) {
      id = JSON.parse(collectedUsersList);
    }
    return id;
  }

  localStorageFunction(animal: Animal) {
    let arrayFromLs = this.getArrayFromLs();
    if (arrayFromLs.length === 0) {
      arrayFromLs.push(animal);
      localStorage.setItem('myAnimal', JSON.stringify(arrayFromLs));
    }
    if (
      JSON.parse(localStorage.getItem('myAnimal') || '[]').find(
        (ids: any) => ids.id !== animal.id
      )
    ) {
      console.log('haaaaaaaaaaaaallo');

      arrayFromLs.push(animal);
      localStorage.setItem('myAnimal', JSON.stringify(arrayFromLs));
    }
  }

  ngOnInit() {
    let arrayFromLsStart = JSON.parse(localStorage.getItem('myAnimal') || '[]');
    console.log(arrayFromLsStart);
    console.log(arrayFromLsStart[0].id);

    for (let i = 0; this.animals.length; i++) {
      if (arrayFromLsStart.find((ids: any) => ids.id === this.animals[i].id)) {
        this.animals[i].isFed = true;
      
      }
    }
  }
}
