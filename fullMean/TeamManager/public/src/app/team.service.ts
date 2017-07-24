import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class TeamService {
  players = [];
  subject = new BehaviorSubject(this.players);
  constructor(private _http: Http) {

  }

  createPlayer(player){
    var promise = this._http.post('/create', player).map(data=>data.json()).toPromise();
    return promise
  }

  displayAll(){
    var promise = this._http.get('/display').map(data=>data.json()).toPromise();
    promise.then((data)=>{this.players=data})
    return promise
  }

  removePlayer(id, index){
    var promise = this._http.post('/remove', {id: id}).map(data=>data.json()).toPromise();
    promise.then(
        (data)=>{
          this.players.splice(index, 1);
        }
    )
    return promise
  }

  updateStatus(data){
      var promise = this._http.post('/update', data).map(data=>data.json()).toPromise();
      promise.then(
          (player)=>{
            this.players.splice(data.index, 1, player);
          }
      )
      return promise
  }

}
