import { Component } from '@angular/core';
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = null;
  score = null;
  userExist = null;
  submited = false;

  constructor(private _httpService: HttpService){}

  getGitHubUser(){
    this.submited = true;
    this._httpService.retriveGithubUser(this.username)
      .then( (user) => {
        this.userExist = true;
        this.score = user.followers + user.public_repos
      })
        .catch( err => {
          this.userExist = false;
      })

  }
}
