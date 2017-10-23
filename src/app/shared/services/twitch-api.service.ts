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

    public max_results: number = 40;
    public lastQuery: string;

    constructor(
        private http: Http
    ){}

    /* The getVideos functions is the first function that runs when our app initializes the 
    values it returns are then emited to maincomponent from search component and
    eventually passed to videoList component. */

    public getVideos(): Promise<any> {
        // tslint:disable-next-line:max-line-length
        let api = this.base_url + 'client_id=' + this.client_id + '&limit=' + this.max_results + '&type=suggest';
        return this.http.get(api)
        .map((results) => {
            let res = results.json();
            return res.videos;
        })
        .toPromise()
        .catch(this.handleError)
    }

    public searchVideos(query: any): Promise<any> {
        // tslint:disable-next-line:max-line-length
        let api = this.search_url + query + '&client_id=' + this.client_id + '&limit=' + this.max_results + '&type=suggest';
        return this.http.get(api)
        .map((results) => {
            let res = results.json();
            this.lastQuery = query;
            console.log(res.videos.length);
            if (res.videos.length === 0){
                alert('Sorry no streams where found');
            }
            return res.videos;
        })
        .toPromise()
        .catch(this.handleError)
    }
    /* The getStreams functions runs when the scroll event is emited to return more results*/
    public getStreams(): Promise<any> {
        let api = this.search_url + this.lastQuery + '&client_id=' + 
        this.client_id + '&limit=' + 100 + '&type=suggest';
        return this.http.get(api)
        .map((results) => {
            let res = results.json();
            return res.videos;
        })
        .toPromise()
        .catch(this.handleError)
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            alert("There's been an Error, Please confirm you're connected to the Internet");
        }
    }
}
