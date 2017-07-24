import { Component, OnInit, OnDestroy } from '@angular/core';
import { TeamService } from "../../team.service";
import { Subscription } from 'rxjs/Subscription';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  subscription: Subscription;
  players = [];
  constructor(private _teamService: TeamService) { }

  ngOnInit() {
    this.subscription = this._teamService.subject.subscribe(
        (data) => {
            console.log(data, 'subscribetion');
            this.players = data
        },
        (err) => {},
        () => {});
    this._teamService.displayAll()
        .then((data)=>{this.players=data})
  }

  removePlayer(id, index) {
      this._teamService.removePlayer(id, index)
  }

  ngOnDestroy() {
      this.subscription.unsubscribe()
  }


}
