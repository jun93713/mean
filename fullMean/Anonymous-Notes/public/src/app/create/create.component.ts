import { Component, OnInit } from '@angular/core';
import { NoteService } from "../note.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  note = {
    note: null
  };
  constructor(private _noteService: NoteService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.note, 'this is from create component');
    this._noteService.creatNote(this.note)
        .then((data)=>{
          console.log(data);
          this.note = {note: null};
          // this._noteService.update(data)
        })
        .catch((err)=>{});
  }
}
