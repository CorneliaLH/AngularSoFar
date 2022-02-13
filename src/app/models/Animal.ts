export class Animal {
  species: string;
  name: string;
  age: number;
  niceAnimal: boolean;
  fourLegs: boolean;
  isFed: boolean;
  id: number
  constructor(
    species: string,
    name: string,
    age: number,
    niceAnimal: boolean,
    fourLegs: boolean,
    isFed: boolean,
    id:number
  ) {
    this.species = species;
    this.name = name;
    this.age = age;
    this.niceAnimal = niceAnimal;
    this.fourLegs = fourLegs;
    this.isFed = isFed;
    this.id = id
  }
}
