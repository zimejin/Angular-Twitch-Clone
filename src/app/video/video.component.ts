import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TwitchApiService } from '../shared/services/twitch-api.service';

@Component({
    selector: 'video-list',
    templateUrl: 'video.component.html',
    styleUrls: ['video.component.css']
})

export class VideoListComponent {
    public query: any = 'videos/top?';
    @Input() videoList;  // why isn't this working
    @Output() videosUpdated = new EventEmitter();

    constructor(private twitchservice: TwitchApiService){
        this.twitchservice.getStreams(this.query)
        .subscribe(data => {
            // handleSearchVideo($event) will run when this function emits data
            this.videosUpdated.emit(data);
        })
    }
}