import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './filter-priority/card/card.component';
import { FilterPriorityModule } from './filter-priority/filter-priority.module';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FilterPriorityModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
