import { Component, AfterContentInit } from '@angular/core';
import { TwitchPlayerService } from '../../shared/services/twitch-player.service';

@Component({
    selector: 'video-player',
    templateUrl: 'video-player.component.html',
    styleUrls: ['video-player.component.css']
})

export class VideoPlayerComponent implements AfterContentInit {

    constructor(private twitchplayerservice: TwitchPlayerService) {}

    ngAfterContentInit(){
        let doc = window.document;
        let playerApi = doc.createElement('script');
        playerApi.type = 'text/javascript';
        playerApi.src = 'http://player.twitch.tv/js/embed/v1.js';
        doc.body.appendChild(playerApi);
        this.twitchplayerservice.createPlayer();
    }
}