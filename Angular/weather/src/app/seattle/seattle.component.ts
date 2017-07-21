import { Component, OnInit } from '@angular/core';
import { WeatherService } from "../weather.service"
@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
    weather = null;
    humidity = null;
    average = null;
    high = null;
    low = null;
    status = null;
    constructor(private _weatherService: WeatherService) {
        this._weatherService.retrieveWeatherApi('Seattle')
            .then(data => {
                this.weather = data.list[0].main;
                this.humidity = this.weather.humidity;
                this.high = Math.round(this.weather.temp_max);
                this.low = Math.round(this.weather.temp_min);
                this.average = Math.round((this.weather.temp_max + this.weather.temp_min) / 2);
                this.status = data.list[0].weather[0].description
            })
            .catch( err => {console.log(err)});
    }
  ngOnInit() {
  }

}
