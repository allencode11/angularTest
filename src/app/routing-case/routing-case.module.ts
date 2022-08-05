import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingCaseRoutingModule } from './routing-case-routing.module';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    CreateComponent,
    DetailComponent,
    EditComponent,
    DeleteComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    RoutingCaseRoutingModule
  ],
  exports: [
    CreateComponent,
    DetailComponent,
    EditComponent,
    DeleteComponent,
    ListComponent,
  ],
})
export class RoutingCaseModule { }
