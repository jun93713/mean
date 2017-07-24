import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-playerstatus',
  templateUrl: './playerstatus.component.html',
  styleUrls: ['./playerstatus.component.css']
})
export class PlayerstatusComponent implements OnInit {
  game = 1;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  gameone(){
    this.game = 1;
    this.router.navigate(['/status/game/1'])
  }
  gametwo(){
      this.game = 2;
      this.router.navigate(['/status/game/2'])
  }
  gamethree(){
      this.game = 3;
      this.router.navigate(['/status/game/3'])
  }
}
