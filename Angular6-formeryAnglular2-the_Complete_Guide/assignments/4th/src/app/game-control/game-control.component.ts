import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  increasingNumber = 0;
  @Output() startGameClicked = new EventEmitter<number>();
  // endGameClicked = new EventEmitter<{incrementingNumber: number}>();
  constructor() { }
  ref;

  startGame() {
    // sem pojde setInterval
    // this.startGameClicked.emit({
    //   incrementingNumber: this.cislo
    // });
    this.ref = setInterval(() => {
      this.startGameClicked.emit(this.increasingNumber + 1);
      this.increasingNumber++;
    }, 1000);
  }

  stopGame() {
    clearInterval(this.ref);
  }

  ngOnInit() {
  }
  

}
