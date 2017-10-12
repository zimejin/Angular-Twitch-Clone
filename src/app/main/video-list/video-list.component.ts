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
    public Liked: boolean = false;

    // tslint:disable-next-line:member-access
    @Input() videoList;

    constructor(
        private twitchservice: TwitchApiService,
        private twitchplayerservice: TwitchPlayerService) {}

   /* The Play Function Takes video._id as a parameter to Initialize
   a similar function In the TwitchPlayerService to set the video by ID */

   public play(video: any): void {
       this.twitchplayerservice.playVideo(video);
   }
    /* Iteration TODO - A love icon to transition to red when a user likes a Video, It should apply
    to only the selected Div Element. A potential way to do this is by using a dynamically rendered 
    Div ID */
   public videoLiked(video: any) {
       console.log('Thanks for liking');
   }
}