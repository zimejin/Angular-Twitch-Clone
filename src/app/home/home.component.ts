import {  Component } from '@angular/core';
import { TwitchApiService } from '../shared/services/twitch-api.service';
import { TwitchAuthService } from '../shared/services/twitch-auth.service';

@Component({
  selector: 'home',
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html'
})
export class HomeComponent  {public accessToken;
  public videoList = [];
  public favoriteVideosList = [];
  constructor( private twitchapiservice: TwitchApiService,
               private authenticationservice: TwitchAuthService ) {}

  public handleLikeEvent(videos: any): void {
      // Push our favorite videos into a favorite videos array
      this.favoriteVideosList = videos;
  }
  // Authenticate User
  public authUser() {
      this.authenticationservice.userAuth();
      this.accessToken = location.hash;
      console.log(this.accessToken);
      return this.accessToken;
  }
  public revokeUser() {
      this.authenticationservice.revokeToken();
  }

}
