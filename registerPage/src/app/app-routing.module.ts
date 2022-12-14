import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtroPageModule } from './modules/register/otro-page.module';
import { RegisterPageModule } from './modules/register/register-page.module';

const routes: Routes = [];


@NgModule({
  imports: [RouterModule.forRoot(routes), RegisterPageModule, OtroPageModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
