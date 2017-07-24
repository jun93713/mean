import { Component, OnInit, OnDestroy } from '@angular/core';
import { TeamService } from "../../team.service";
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-gametwo',
  templateUrl: './gametwo.component.html',
  styleUrls: ['./gametwo.component.css']
})
export class GametwoComponent implements OnInit {
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
            game: 2,
            newstatus: 'Playing'
        }
        this._teamService.updateStatus(data)
    }

    updateNotPlaying(id, index){
        var data = {
            id: id,
            index: index,
            game: 2,
            newstatus: 'Not Playing'
        }
        this._teamService.updateStatus(data)
    }

    updateUndecided(id, index){
        var data = {
            id: id,
            index: index,
            game: 2,
            newstatus: 'Undecided'
        }
        this._teamService.updateStatus(data)
    }
}
