import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
            <h2>{{"Hello " +parentdata}}</h2>
            <button (click)="fireEvent()">Send Event</button>
            <button (click)="fireEvent()">Send Event</button>
            <button (click)="fireEvent()">Send Event</button>
            `,
  styles: [`

  
  `]
})
export class TestComponent implements OnInit {


  @Input() public parentdata;
  @Output() public childEvent = new EventEmitter();
 

  constructor() { }

  ngOnInit(): void {
  }

  fireEvent(){
    this.childEvent.emit('Hey App Component');
  }

}
