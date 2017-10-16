import { Directive, ElementRef, Input, Output, EventEmitter, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[Toggler]'
})
export class ToggleDirective {

    @HostBinding('class.active') isActive = false;
    
        toggle() {
            this.isActive = !this.isActive;
        }
}