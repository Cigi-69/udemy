import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers = [];
  evenNumbers = [];

  onEvenOrOdd (number) {
    if(number % 2 === 0) {
      this.evenNumbers.push( number ) } else 
      {
        this.oddNumbers.push(number)
      }
  };
  
}
