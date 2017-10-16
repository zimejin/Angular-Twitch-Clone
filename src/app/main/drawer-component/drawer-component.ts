import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'drawer',
    templateUrl: 'drawer-component.html',
    styleUrls: ['drawer-component.css']
})

export class DrawerComponent {
    // tslint:disable-next-line:member-access
    @Input() favoriteVideosList: any;

    // tslint:disable-next-line:no-empty
    constructor() {
        console.log(this.favoriteVideosList)
     }
    public removeFromList(video: Object): void {
        this.favoriteVideosList.splice(this.favoriteVideosList.indexOf(video), 1);
    }
}