import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'edit/:id', component: EditComponent, canActivate: [AuthGuard] },
  { path: 'delete', component: DeleteComponent, canActivate: [AuthGuard] },
  { path: 'list', component: ListComponent },
  { path: 'create', component: CreateComponent, canActivate: [AuthGuard] },
  { path: 'detail/:id', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingCaseRoutingModule { }
