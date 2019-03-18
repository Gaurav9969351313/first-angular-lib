import { NgModule,ModuleWithProviders  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterButtonComponent } from './counter-button/counter-button.component';
import { MaterialModule } from "./material-components.module";

import { GTDirectivesModule } from "./directives/directives.module";
import { GTFeaturesModule } from "./features/features.module";
import { TooltipModule } from './tooltip/tooltip.module'
// import { GTComponentsModule } from "./components/components.module";


@NgModule({
  declarations: [CounterButtonComponent],
  imports: [
    CommonModule,
    MaterialModule,
    TooltipModule,
    GTDirectivesModule,
    GTFeaturesModule
    // GTComponentsModule
  ],
  exports: [CounterButtonComponent, GTDirectivesModule,TooltipModule]
})
export class MyLibModule {
}
