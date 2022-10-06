import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { OtroPruebaComponent } from './pages/otro-prueba/otro-prueba.component';

const routes: Route[] = [{ path: '', component: OtroPruebaComponent },
{ path: '2', component: OtroPruebaComponent }];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class OtroPageRoutingModule { }
