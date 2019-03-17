import { NgModule,ModuleWithProviders  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterButtonComponent } from './counter-button/counter-button.component';

import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { HiddenDirective } from "./directives/hidden.directive";

@NgModule({
  declarations: [CounterButtonComponent, HiddenDirective],
  imports: [
    CommonModule,
    MatButtonModule,
    MatBadgeModule
  ],
  exports: [CounterButtonComponent, HiddenDirective]
})
export class MyLibModule {
}
