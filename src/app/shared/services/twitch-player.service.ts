import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

let _window: any = window;
declare var Twitch: any;

@Injectable()
export class TwitchPlayerService {
    public twitch_player;
    public width: string = '400';
    public height: string = '300';

    @Output() public currentVideoText: EventEmitter<any> = new EventEmitter(true);
    private currentVideoId: string;

    constructor() {}
    /* TODO write a function to initialize the twitch-player frame taking into
    consideration the VIDEO-ID */
    public createPlayer(): void {
        let options = {
            width:  this.width,
            height: this.height,
            video:  null
        };
        let interval = setInterval(() => {
            // tslint:disable-next-line:max-line-length
            if ((typeof _window.Twitch !== 'undefined') && _window.Twitch && _window.Twitch.Player) {
                this.twitch_player = new Twitch.Player('twitch-player', options);
                this.twitch_player.setMuted(false);
                clearInterval(interval);
            }
        }, 100 );
    }
    /* TODO - create a Play-Video function that would load the video by ID //'v109010497'*/
    public playVideo(video: any) {
        if (!this.twitch_player) {
            console.log('Video Player is Loading');
        }
        this.twitch_player.setVideo(video._id);
        this.currentVideoId = video._id;
        this.currentVideoText.emit(video.title);
   };

   public resizePlayer(width: number, height: number) {
       this.width = width.toString();
       this.height = width.toString();
    }
}