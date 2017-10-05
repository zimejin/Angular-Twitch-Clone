import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { TWITCH_API_KEY } from '../constants';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class TwitchApiService {
    base_url: string = 'https://api.twitch.tv/kraken/videos/top?';
    // tslint:disable-next-line:max-line-length
    search_url: string = 'https://api.twitch.tv/kraken/videos/top?period=all&game=';
    client_id: any   =  'j9ybq0hpyrlo4pgczcefitgg50lzvs';
    max_results: number = 40;

    constructor(
        private http: Http
    ){}

    public getVideos(): Observable<any> {
        // tslint:disable-next-line:max-line-length
        let api = this.base_url + 'client_id=' + this.client_id + '&limit=' + this.max_results + '&type=suggest';
        return this.http.get(api)
        .map(results => {
            let res = results.json();
            return res.videos;
        });
    }

    public searchVideos(query: any): Observable<any> {
        let api = this.search_url + query + '&client_id=' + this.client_id + '&type=suggest';
        return this.http.get(api)
        .map(results => {
            let res = results.json();
            console.log(res.videos.length);
            if(res.videos.length === 0){
                alert('Sorry no streams where found');
            }
            return res.videos;
        });
    }
}
