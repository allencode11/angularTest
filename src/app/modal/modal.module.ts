import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './modal/modal.component';
import { FormComponent } from './form/form.component';
import { ModalRoutingModule } from './modal-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    ModalComponent,
    FormComponent,
  ],
  exports: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    ModalRoutingModule,
  ],
})
export class ModalModule { }
