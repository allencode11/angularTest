import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriorityPipe } from './priority.pipe';
import { CardComponent } from './card/card.component';
import { FilterRoutingModule } from './filter-routing.module';



@NgModule({
  declarations: [
    PriorityPipe,
    CardComponent,
  ],
  exports: [
    PriorityPipe,
    CardComponent,
  ],
  imports: [
    CommonModule,
    FilterRoutingModule,
  ],
})
export class FilterPriorityModule { }
