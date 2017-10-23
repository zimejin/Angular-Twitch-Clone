import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TwitchApiService } from '../../shared/services/twitch-api.service';
import { TwitchPlayerService } from '../../shared/services/twitch-player.service';

@Component({
	selector: 'videos-search',
	templateUrl: 'videos-search.component.html',
	styleUrls: ['videos-search.component.css']
})

export class TwitchVideoSearchComponent {
    @Output() videosUpdated = new EventEmitter();
    
    private last_search: string;

    public searchForm = this.fb.group({
		query: ['', Validators.required]
	});

    constructor(
        public fb: FormBuilder,
        private twitchservice: TwitchApiService,
        private twitchplayerservice: TwitchPlayerService) {
        this.twitchservice.getVideos()
        .then((data) => {
            this.videosUpdated.emit(data);
        });
    }
    // Search Function which is called from search component
    public doSearch(event): void {
        this.videosUpdated.emit([]);
        this.last_search = this.searchForm.value.query;
        this.twitchservice.searchVideos(this.last_search)
        .then((response) => {
            // console.log(response);
            let arrayObj = [];
            interface DataObj { title: any; _id: any; preview: any; views: any; }
            for (let i; i < response.length; i++) {
                const data: DataObj = {
                    title:  response[i].title,
                    _id:    response[i]._id,
                    preview: response[i].preview,
                    views:   response[i].views};
                arrayObj.push(data);
                }
            this.videosUpdated.emit(arrayObj);
            });
        }
    }