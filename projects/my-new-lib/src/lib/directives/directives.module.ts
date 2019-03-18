import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HiddenDirective } from "./hidden.directive";
import { showHideVaiIpDirective } from "./showHideVaiIp.directice";
import { UnderlineDirective } from "./underline.directive";
import { ItalicDirective } from "./italic.directive";
import { ShowHidePassword } from "./showHidePassword.directive";
import { HighlightDirective } from "./highlight.directive";
import { DigitOnlyDirective } from "./digitonly.directive";
import { DynamicHeightDirective } from "./dynamic-height.directive";
import { CreditCardValidator } from "./CreditCardValidator.directive";
import { InputTrimDirective } from "./input-trim.directive";

@NgModule({
    declarations: [
        HiddenDirective,
        showHideVaiIpDirective,
        UnderlineDirective, 
        HighlightDirective,
        ShowHidePassword,
        DigitOnlyDirective,
        ItalicDirective,
        DynamicHeightDirective,
        CreditCardValidator,
        InputTrimDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        InputTrimDirective,
        HiddenDirective, 
        showHideVaiIpDirective, 
        UnderlineDirective, 
        HighlightDirective, 
        DigitOnlyDirective,
        ShowHidePassword,
        ItalicDirective,
        DynamicHeightDirective,
        CreditCardValidator
    ]
})
export class GTDirectivesModule {
}
