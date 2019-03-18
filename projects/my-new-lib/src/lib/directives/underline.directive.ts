import { Directive, HostListener, Renderer, ElementRef } from '@angular/core';

@Directive({
    selector: '[myUnderline]'
})
export class UnderlineDirective {

    constructor(
        private renderer: Renderer,
        private el: ElementRef
    ) { }

    @HostListener('mouseenter') onMouseEnter() {
        this.renderer.setElementStyle(this.el.nativeElement, 'text-decoration', 'underline');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.renderer.setElementStyle(this.el.nativeElement, 'text-decoration', 'none');
    }
}