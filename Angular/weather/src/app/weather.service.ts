import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs";
@Injectable()
export class WeatherService {

  constructor(private _http: Http) { }
  retrieveWeatherApi(city){
    return this._http.get(`http://api.openweathermap.org/data/2.5/find?q=${city}&units=imperial&APPID=44eef5033e1fb069c45fa3bf388697e7`).map(data=>data.json()).toPromise()
  }
}
