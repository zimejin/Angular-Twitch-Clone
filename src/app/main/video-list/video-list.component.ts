import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TwitchApiService } from '../../shared/services/twitch-api.service';
import { TwitchPlayerService } from '../../shared/services/twitch-player.service';

@Component({
    selector: 'video-list',
    templateUrl: 'video-list.component.html',
    styleUrls: ['video-list.component.css']
})

export class VideoListComponent {
    public query: any = 'videos/top?';
    public toggle: boolean = true;
    public currentVideo: any;

    @Input() public videoList;

    constructor(
        private twitchservice: TwitchApiService,
        private twitchplayerservice: TwitchPlayerService) {}

   /* The Play Function Takes video._id as a parameter to Initialize
   a similar function In the TwitchPlayerService to set the video by ID */

   public play(video: any): void {
       this.twitchplayerservice.playVideo(video);
       this.currentVideo = video;
   }
}