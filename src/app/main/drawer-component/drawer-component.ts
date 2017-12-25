import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TwitchPlayerService } from '../../shared/services/twitch-player.service';

@Component({
    selector: 'drawer',
    templateUrl: 'drawer-component.html',
    styleUrls: ['drawer-component.css']
})

export class DrawerComponent {
  @Input() favoriteVideosList: any;

  // tslint:disable-next-line:no-empty
  constructor( private twitchplayerservice: TwitchPlayerService) {
  }
  public removeFromList(video: Object): void {
    this.favoriteVideosList.splice(this.favoriteVideosList.indexOf(video), 1);
  }
  public play(video: any): void {
    this.twitchplayerservice.playVideo(video);
  }
}
