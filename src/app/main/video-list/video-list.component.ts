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
    public favoriteVideos = [];
    public toggle: boolean = true;

    @Input() videoList;
    @Output() LikeEvent = new EventEmitter();

    constructor(
        private twitchservice: TwitchApiService,
        private twitchplayerservice: TwitchPlayerService) {}

   /* The Play Function Takes video._id as a parameter to Initialize
   a similar function In the TwitchPlayerService to set the video by ID */

   public play(video: any): void {
       this.twitchplayerservice.playVideo(video);
   }
   public addToFavorites(video: any): void {
       if (!this.favoriteVideos.some((e) => e.title === video.title )){
           this.favoriteVideos.push(video);
           this.LikeEvent.emit(this.favoriteVideos);
           console.log(video);
        }
       this.toggleState();
    }
    public toggleState() {
        this.toggle = !this.toggle;
    }
}