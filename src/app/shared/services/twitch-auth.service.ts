import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class TwitchAuthService {
    public clientID: string = 'j9ybq0hpyrlo4pgczcefitgg50lzvs';
    public redirectUri: any = 'http://localhost:3000';
    public responseType: any = 'token';
    public scope: any = 'user_follows_edit&';
    public nonce: any = '';
    public state: any = '';
    public apiUrl: string = 'https://api.twitch.tv/kraken/oauth2/';

    constructor( private http: Http) {}

    public userAuth() {
        let loginUrl = this.apiUrl + 'authorize?' + 'client_id=' + this.clientID +
        '&redirect_uri=' + this.redirectUri + '&response_type=' + this.responseType +
        '&scope=' + this.scope;
        window.open(loginUrl, '_self');
    }
    public revokeToken() {
        let loginUrl = this.apiUrl + 'revoke?' + 'client_id=' + this.clientID + '&redirect_uri=' +
        this.redirectUri + '&response_type=' + this.responseType + '&scope=' + this.scope;
        this.http.post(loginUrl, '', '');
    }
}