import { Component, OnInit, OnDestroy } from '@angular/core';
import { TeamService } from "../../team.service";
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-gamethree',
  templateUrl: './gamethree.component.html',
  styleUrls: ['./gamethree.component.css']
})
export class GamethreeComponent implements OnInit {
    subscription: Subscription;
    players = [];
  constructor(private _teamService: TeamService) { }

  ngOnInit() {
      this.subscription = this._teamService.subject.subscribe(
          (data) => {
              this.players = data
          },
          (err) => {},
          () => {});
      this._teamService.displayAll()
          .then((data)=>{this.players=data})
  }
    ngOnDestroy() {
        this.subscription.unsubscribe()
    }

    updatePlaying(id, index){
        var data = {
            id: id,
            index: index,
            game: 3,
            newstatus: 'Playing'
        }
        this._teamService.updateStatus(data)
    }

    updateNotPlaying(id, index){
        var data = {
            id: id,
            index: index,
            game: 3,
            newstatus: 'Not Playing'
        }
        this._teamService.updateStatus(data)
    }

    updateUndecided(id, index){
        var data = {
            id: id,
            index: index,
            game: 3,
            newstatus: 'Undecided'
        }
        this._teamService.updateStatus(data)
    }

}
