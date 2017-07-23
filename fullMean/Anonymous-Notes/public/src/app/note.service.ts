import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class NoteService {
  notes = [];
  subject = new BehaviorSubject(this.notes);
  //by change null to this.notes, we dont need update function
  // update(notes){
  //     this.subject.next(notes)
  // }
  constructor(private _http: Http) { }

  creatNote(note){
    var promise = this._http.post('/create', note).map(data=>data.json()).toPromise();
    promise.then((data)=>{
      this.notes.push(data.note);
    });
    return promise;
  }

  displayNotes(){
    var promise =  this._http.get('/display').map(data=>data.json()).toPromise();
    promise.then((data)=> {
      this.notes = data;
    });
    return promise;
  }


}
