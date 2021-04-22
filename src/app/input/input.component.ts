import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Output() newCityEvent = new EventEmitter<string>();
  constructor() { }
  newCity(newName: string) {
    this.newCityEvent.emit(newName);
  }
  ngOnInit() {
  }

}