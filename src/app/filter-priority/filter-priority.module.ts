import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriorityPipe } from './priority.pipe';



@NgModule({
  declarations: [
    PriorityPipe,
  ],
  exports: [
    PriorityPipe,
  ],
  imports: [
    CommonModule,
  ],
})
export class FilterPriorityModule { }
