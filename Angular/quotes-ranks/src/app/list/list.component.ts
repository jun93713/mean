import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() quotelist;
  @Output() deletequote = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  voteup(i){
    this.quotelist[i].rating += 1;
  }
  votedown(i){
    this.quotelist[i].rating -= 1;
  }
  remove(i){
    this.deletequote.emit(i);
  }
}
