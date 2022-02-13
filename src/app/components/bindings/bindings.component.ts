import { Component, OnInit } from '@angular/core';
import { Picture } from 'src/app/models/Picture';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css'],
})
export class BindingsComponent implements OnInit {
  imgURL: string = 'assets/img/picture.jpg';
  imgObject: Picture = new Picture('Woman in towel', 'assets/img/picture.jpg');

  klass1: string = 'klass1';
  klass4: string = 'klass4';
  glad: boolean = true;

  constructor() {}

  changeColor() {
    this.glad = !this.glad;
  }
  ngOnInit() {}
}
