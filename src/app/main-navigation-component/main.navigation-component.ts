// Imports
import { Component } from '@angular/core';
import { TwitchAuthService } from '../shared/services/twitch-auth.service';

@Component({
    selector: 'navigation-comp',
    templateUrl: 'main.navigation-component.html',
    styleUrls: ['main.navigation-component.css']
})

export class MainNavigationComponent {
    public accessToken;
    constructor( private authenticationservice: TwitchAuthService ) {}

    // Authenticate User
    public authUser() {
        this.authenticationservice.userAuth();
        this.accessToken = location.hash;
        console.log(this.accessToken);
        return this.accessToken;
    }
    public revokeUser() {
        this.authenticationservice.revokeToken();
    }
}