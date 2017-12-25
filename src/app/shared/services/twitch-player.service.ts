import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

let _window: any = window;
/* the declare method tells Angular & typescript that this method has already being
 defined somewhere else, essentially allowing us to load our api without a keyword error */
declare var Twitch: any;
declare var setVideo: any;

@Injectable()
export class TwitchPlayerService {
    // tslint:disable-next-line:variable-name
    public twitch_player;
    public channelView: any;
    /* Emit the currentvideotext to the main component and videocomponent to display now playing*/
    @Output() public currentVideoText: EventEmitter<any> = new EventEmitter(true);
    private currentVideoId: any;

    constructor() {}
    /* Function to initialize the twitch-player frame taking into
    consideration the VIDEO-ID */
    public appendAPI() {
        let doc = window.document;
        let playerApi = doc.createElement('script');
        playerApi.type = 'text/javascript';
        playerApi.src = 'https://player.twitch.tv/js/embed/v1.js';
        doc.body.appendChild(playerApi);
    }
    public playerOptions(width: string, height: string) {
        let options = { width, height };
        return options;
    }
    public createPlayer(playerOptions): void {
        let interval = setInterval(() => {
            // tslint:disable-next-line:max-line-length
            if ((typeof _window.Twitch !== 'undefined') && _window.Twitch && _window.Twitch.Player) {
                this.twitch_player = new Twitch.Player('twitch-player', playerOptions);
                this.twitch_player.setMuted(false);
                clearInterval(interval);
            }
        }, 100 );
    }
    /* play the video by ID, Sample ID 'v109010497' */
    public playVideo(video: any) {
        if (!this.twitch_player) {
            console.log('Video Player is Loading');
        }
        this.twitch_player.setVideo(video._id);
        // Emit Current Video Text for Now Playing Menu
        this.currentVideoText.emit(video.title);
        this.channelView = video.channel.name;
   };
   public resizePlayer(width: string, height: string) {
      this.playerOptions(width, height);
    }
}