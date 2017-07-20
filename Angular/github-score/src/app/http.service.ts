import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';
@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

  retriveGithubUser(username){
    return this._http.get(`https://api.github.com/users/${username}`).map(data=>data.json()).toPromise()
  }
}
