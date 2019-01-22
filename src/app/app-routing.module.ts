import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperatorEditComponent } from './operator-edit/operator-edit.component';
import { OperatorListComponent } from './operator-list/operator-list.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/operator-list', pathMatch: 'full'
  },
  {
    path: 'operator-list',
    component: OperatorListComponent
  },
  {
    path: 'operator-add',
    component: OperatorEditComponent
  },
  {
    path: 'operator-edit/:id',
    component: OperatorEditComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
