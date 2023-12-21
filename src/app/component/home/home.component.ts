import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title: string = 'The title';
  constructor() {}

  ngOnInit() {}

  updateTitle(value: string) {
    console.log(`updateTitle: ${value}`);
    this.title = value;
  }
}
