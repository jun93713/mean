import { Component, OnInit } from '@angular/core';
import { TeamService } from "../../team.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-newplayer',
  templateUrl: './newplayer.component.html',
  styleUrls: ['./newplayer.component.css']
})
export class NewplayerComponent implements OnInit {

  player = {
    name: null,
    position: ''
  };

  constructor(private _teamService: TeamService,
              private router: Router
              ) { }

  ngOnInit() {
  }


  onSubmit(){
    this._teamService.createPlayer(this.player);
    this.player = {
        name: null,
        position: ''
    };
    this.router.navigate(['/player/list']);
  }
}
