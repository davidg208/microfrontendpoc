import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { RegisterFormValues } from '../../components/register-form/register-form.component';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  constructor(private auth: AuthService,  private router: Router) { }

  ngOnInit(): void {
  }

  formSubmitted (values: RegisterFormValues) {
    this.router.navigate(['/2']);
  }

}
