import { Component } from '@angular/core';
import { TwitchApiService } from '../shared/services/twitch-api.service';

@Component({
    selector: 'main-comp',
    templateUrl: 'main.component.html',
    styleUrls: ['main.component.css']
})

export class MainComponent {
    public videoList = [];
    constructor( private twitchapiservice: TwitchApiService){}

    handleSearchVideo(videos: Array<any>): void {
        // this functions will create populate the videoList with the array from the API.
        this.videoList = videos;
    }
}