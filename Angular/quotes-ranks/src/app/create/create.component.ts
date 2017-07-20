import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  @Output() newQuote = new EventEmitter();

  quote = {
    content: '',
    author: '',
    rating: 0
  };

  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    this.newQuote.emit(this.quote);
    this.quote = {
      content: '',
      author: '',
      rating: 0
    };
  }
}
