import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'heros';
  heroes = [{name: 'Zayed', age: 29}, {name: 'Nahid ', age: 29}, {name: 'Yasin', age: 29}];
}
