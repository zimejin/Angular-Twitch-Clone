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

    // Dynamically embed our API String for Interative Twitch videos
    public ngAfterContentInit() {
        this.twitchplayerservice.appendAPI();
        this.twitchplayerservice.createPlayer(this.twitchplayerservice.playerOptions('400', '300'));
    }

    // tslint:disable-next-line:member-access
    public togglePlayer(): void {
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
        this.twitchplayerservice.resizePlayer(width.toString(), height.toString());
    };

    // tslint:disable-next-line:member-access
    minimizePlayer(): void {
        this.superMinPlayer = !this.superMinPlayer;
    }
}