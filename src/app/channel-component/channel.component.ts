import {  Component, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { TwitchPlayerService } from '../shared/services/twitch-player.service';

@Component({
  selector: 'channel-comp',
  templateUrl: 'channel.component.html',
  styleUrls: ['channel.component.css']
})

export class ChannelComponent {
  // Default URLs for Chat and Video
Url: string = 'http://player.twitch.tv/?channel=dallas&muted=true';
chatUrl: string = 'http://www.twitch.tv/embed/monstercat/chat/?no-mobile-redirect=true';
  constructor(
    private twitchplayerservice: TwitchPlayerService) {
      if (this.twitchplayerservice.channelView !== 'undefined') {
        let channelName = this.twitchplayerservice.channelView;
        this.Url = `http://player.twitch.tv/?channel=${channelName}&muted=true`;
        this.chatUrl = `http://www.twitch.tv/embed/${channelName}/chat/?no-mobile-redirect=true`;
      }
  }
}
