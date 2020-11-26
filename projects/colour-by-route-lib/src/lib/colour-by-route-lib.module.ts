import { NgModule } from '@angular/core';

import { ColourByRouteLibComponent } from './colour-by-route-lib.component';
import { ColurByRouteDirective } from './colour-by-route-lib.directive';



@NgModule({
  declarations: [ColourByRouteLibComponent,ColurByRouteDirective],
  imports: [
  ],
  exports: [ColurByRouteDirective]
})
export class ColourByRouteLibModule { }
