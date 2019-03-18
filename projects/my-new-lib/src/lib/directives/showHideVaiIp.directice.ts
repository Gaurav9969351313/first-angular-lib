import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({ selector: '[showHideVaiIp]' })
export class showHideVaiIpDirective {

    constructor(public el: ElementRef, public renderer: Renderer) {}

    @Input() showHideVaiIp: boolean;

    ngOnInit(){
        // Use renderer to render the emelemt with styles
        console.log(this.showHideVaiIp)
        if(this.showHideVaiIp) {
            console.log('hide');
            this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
        }
    }
}