import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtroPageRoutingModule } from './otro-page-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { OtroPruebaComponent } from './pages/otro-prueba/otro-prueba.component';
import { OtroFormComponent } from './components/otro-form/otro-form.component';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxCommonUiLibModule, NgxCommonUiLibService } from 'ngx-common-ui-lib';

@NgModule({
  declarations: [
    OtroPruebaComponent,
    OtroFormComponent
  ],
  imports: [
    CommonModule,
    OtroPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxCommonUiLibModule
  ],
  providers: [AuthService, NgxCommonUiLibService]
})
export class OtroPageModule { }
