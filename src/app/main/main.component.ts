// Imports
import { Component } from '@angular/core';
import { TwitchApiService } from '../shared/services/twitch-api.service';

@Component({
    selector: 'main-comp',
    templateUrl: 'main.component.html',
    styleUrls: ['main.component.css']
})

export class MainComponent {
    public videoList = [];
    public favoriteVideosList = [];
    constructor( private twitchapiservice: TwitchApiService){}

    public handleSearchVideo(videos: any[]): void {
        // this functions will create populate the videoList with the array from the API.
        this.videoList = videos;
    }
    public handleLikeEvent(videos: any): void {
        // Push our favorite videos into a favorite videos array
        this.favoriteVideosList = videos;
    }
    /* getStreams() calls getStreams function in twitchapiservice to return data which we
        then push into the videoList array*/
    public getStreams(): void {
        this.twitchapiservice.getStreams()
        .then((data) => {
            data.forEach((val) => {
                if (!this.videoList.some((e) => e._id === val._id)) {
                    this.videoList.push(val);
                }
            })
        }).catch((error) => { 
            console.log(error)
        });
    }
}