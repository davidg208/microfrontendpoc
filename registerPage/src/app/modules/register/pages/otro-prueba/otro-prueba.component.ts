import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { OtroFormValues } from '../../components/otro-form/otro-form.component';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';

@Component({
  selector: 'app-otro-prueba',
  templateUrl: './otro-prueba.component.html',
  styleUrls: ['./otro-prueba.component.scss']
})
export class OtroPruebaComponent implements OnInit {

  constructor(private auth: AuthService,  private router: Router) { }

  ngOnInit(): void {
  }

  formSubmitted (values: OtroFormValues) {
    this.router.navigate(['/signup']);
  }

}
