import { Component, AfterContentInit, EventEmitter } from '@angular/core';
import { TwitchPlayerService } from '../../shared/services/twitch-player.service';

@Component({
    selector: 'video-player',
    templateUrl: 'video-player.component.html',
    styleUrls: ['video-player.component.css']
})

export class VideoPlayerComponent implements AfterContentInit {
    public minPlayer: boolean = true;
    public superMinPlayer: boolean = false;
    public fullscreenActive: boolean = false;
    public currentVideoText: string = 'None';

    constructor(private twitchplayerservice: TwitchPlayerService) {
        // tslint:disable-next-line:max-line-length
        this.twitchplayerservice.currentVideoText.subscribe((event) => this.currentVideoText = event || 'None' );
    }

    // tslint:disable-next-line:member-access
    ngAfterContentInit() {
        let doc = window.document;
        let playerApi = doc.createElement('script');
        playerApi.type = 'text/javascript';
        playerApi.src = 'http://player.twitch.tv/js/embed/v1.js';
        doc.body.appendChild(playerApi);
        this.twitchplayerservice.createPlayer();
    }

    // tslint:disable-next-line:member-access
    togglePlayer(): void {
        this.minPlayer = !this.minPlayer;
        this.superMinPlayer = false;
    }

    // tslint:disable-next-line:member-access
    toggleFullscreen(): void {
        this.minPlayer = false;
        this.superMinPlayer = false;
        this.fullscreenActive = !this.fullscreenActive;
        let width = this.fullscreenActive ? window.innerWidth - 70 : 440;
        let height = this.fullscreenActive ? window.innerHeight - 120 : 250;
        this.twitchplayerservice.resizePlayer(width, height);
    };

    // tslint:disable-next-line:member-access
    minimizePlayer(): void {
        this.superMinPlayer = !this.superMinPlayer;
    }
}