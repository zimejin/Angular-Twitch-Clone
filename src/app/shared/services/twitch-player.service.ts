import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

let _window: any = window;

@Injectable()
export class TwitchPlayerService {
    public twitch_player;
    public width:string = '400';
    public height:string = '300';

    constructor() {}

/* TODO write a function to initialize the twitch-player frame taking into 
consideration the VIDEO-ID */

    createPlayer(): void {
        let options = {
            width:  this.width,
            height: this.height,
            video:  null
        };
        let interval = setInterval(() => {
            this.twitch_player = new Twitch.Player('twitch-player', options);
            this.twitch_player.setMuted(true);
            clearInterval(interval)
        }, 100 );
    }

   /* TODO - create a Play-Video function that would load the video by ID //'v109010497'*/

   public playVideo(video:any) {
        this.twitch_player.setVideo(video._id);
   };
   
   resizePlayer(width: number, height: number) {
       this.width   =  width.toString();
       this.height   =  width.toString();
   };
}