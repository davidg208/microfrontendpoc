import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageModule } from './modules/register/register-page.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/register/register-page.module').then(m => m.RegisterPageModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes), RegisterPageModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
