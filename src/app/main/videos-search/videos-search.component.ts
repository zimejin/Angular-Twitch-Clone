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
        private twitchplayerservice: TwitchPlayerService
    ) {
        this.twitchservice.getStreams()
        .subscribe((data) => {
           this.videosUpdated.emit(data);
        });
    }

    public doSearch(event): void {
        this.videosUpdated.emit([]);
        this.last_search = this.searchForm.value.query;

        this.twitchservice.searchVideos(this.last_search)
        .subscribe((response) => {
            let arrayObj = [];
            // tslint:disable-next-line:forin
            for (let i in response) {
                let DataObj = {
                    title:   response[i].name,
                    _id:     response[i]._id,
                    preview: response[i].box.large};
                arrayObj.push(DataObj)
                }
            this.videosUpdated.emit(arrayObj);
            });
        }
    }