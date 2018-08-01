import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  disablePar = false;
  btnLog = [];
  btnLogLength = 0;
  constructor() { }

  ngOnInit() {
  }

  btnToggle() {
    // disable or enable the paragraph
    this.disablePar ? this.disablePar = false : this.disablePar = true;
    // how many time was the button clicked
    this.btnLogLength += 1;
     // catching the date and time when the button was clicked
    let btnYear = new Date().toJSON().slice(0,4);
    let btnMonth = new Date().toJSON().slice(5,7) + "-";
    let btnDay = new Date().toJSON().slice(8,10) + "-";
    let btnTime =  new Date().toJSON().slice(11,23) + " ";
    // pushing value of how many times has been button clicked and timestamp into an array
    this.btnLog.push("Button was clicked " + this.btnLogLength + ". time - at " + btnTime + btnDay + btnMonth + btnYear);
  }
}
