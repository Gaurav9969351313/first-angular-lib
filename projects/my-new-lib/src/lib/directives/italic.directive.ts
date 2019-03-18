import { Directive, HostListener, Renderer, ElementRef } from '@angular/core';

@Directive({
    selector: '[myItalic]'
})
export class ItalicDirective {

    constructor(
        private renderer: Renderer,
        private el: ElementRef
    ) { }

    @HostListener('mouseenter') onMouseEnter() {
        this.renderer.setElementStyle(this.el.nativeElement, 'fontStyle', 'italic');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.renderer.setElementStyle(this.el.nativeElement, 'fontStyle', 'normal');
    }
}