import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'ex3', loadChildren: () => import('./routing-case/routing-case.module').then(m => m.RoutingCaseModule)},
  { path: 'ex1', loadChildren: () => import('./modal/modal.module').then(m => m.ModalModule)},
  { path: 'ex2', loadChildren: () => import('./filter-priority/filter-priority.module').then(m => m.FilterPriorityModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
