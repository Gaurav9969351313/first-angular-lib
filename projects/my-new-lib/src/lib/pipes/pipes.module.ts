import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelativeTimePipe } from "./relative-time.pipe";
import { SafebrowsePipe } from "./safebrowse.pipe";
import { SafehtmlPipe } from "./safehtml.pipe";

@NgModule({
    declarations: [
        RelativeTimePipe,
        SafebrowsePipe,
        SafehtmlPipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        RelativeTimePipe,
        SafebrowsePipe,
        SafehtmlPipe
    ]
})
export class GTPipesModule {
}
