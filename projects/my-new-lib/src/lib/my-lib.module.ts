import { NgModule,ModuleWithProviders  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterButtonComponent } from './counter-button/counter-button.component';

import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  declarations: [CounterButtonComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatBadgeModule
  ],
  exports: [CounterButtonComponent]
})
export class MyLibModule {
}
