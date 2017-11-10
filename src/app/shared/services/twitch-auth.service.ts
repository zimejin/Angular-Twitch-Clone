import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class TwitchAuthService {
    client_Id: string = 'j9ybq0hpyrlo4pgczcefitgg50lzvs';
    redirect_Uri: any = 'http://localhost:3000';
    response_Type: any = 'token';
    scope: any = 'user:read:email&';
    nonce: any = '';
    state: any = '';
    apiUrl: string = 'https://api.twitch.tv/kraken/oauth2/';
    token: string = '1lqo5z5kpcs6ztv1e42giaykp3r5em';

    constructor( private http: Http) {}

    public userAuth() {
        // tslint:disable-next-line:max-line-length
        let loginUrl = this.apiUrl + 'authorize?' + 'client_id=' + this.client_Id + '&redirect_uri=' + this.redirect_Uri + '&response_type=' + this.response_Type + '&scope=' + this.scope;
        window.open(loginUrl, '_self');
    }
    public revokeToken() {
        // tslint:disable-next-line:max-line-length
        let loginUrl = this.apiUrl + 'revoke?' + 'client_id=' + this.client_Id + '&redirect_uri=' + this.redirect_Uri + '&response_type=' + this.response_Type + '&scope=' + this.scope;
        window.open(loginUrl, '_self');
    }
}