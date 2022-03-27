import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-squares',
  templateUrl: './squares.component.html',
  styleUrls: ['./squares.component.scss'],
})
export class SquaresComponent implements OnInit {
  counter: number[] = new Array(49);
  constructor() {}

  ngOnInit(): void {}
}
