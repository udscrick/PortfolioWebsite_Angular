import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'hover-button',
  templateUrl: './hover-button.component.html',
  styleUrls: ['./hover-button.component.scss']
})
export class HoverButtonComponent implements OnInit {
@Input() text:any;
@Output() onViewClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onBtnClick(){
    this.onViewClick.emit('');
  }

}
