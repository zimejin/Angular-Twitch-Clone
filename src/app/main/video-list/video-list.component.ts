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
    @Input() videoList; 
    @Output() videosUpdated = new EventEmitter();

    constructor(
        private twitchservice: TwitchApiService,
        private twitchplayerservice: TwitchPlayerService
    ) {
        this.twitchservice.getStreams(this.query)
        .subscribe(data => {
            this.videosUpdated.emit(data);
        })
    }

   /* TODO - Write a Play-Video Function. Which takes Video-ID as a parameter to Initialize 
   a similar function In the Video-Player-Service to load the Video by ID */

   public play(video: any): void {
       this.twitchplayerservice.playVideo(video)
   }

}