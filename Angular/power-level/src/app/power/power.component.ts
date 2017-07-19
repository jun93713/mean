import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {

  powerlevel = null;
  power = 0;
  constructor() { }

  ngOnInit() {
  }

  gotpower(){
    this.power = this.powerlevel;
  }

}
