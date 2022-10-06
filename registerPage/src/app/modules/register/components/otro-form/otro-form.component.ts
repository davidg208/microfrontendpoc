import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxCommonUiLibService } from 'ngx-common-ui-lib';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

export interface OtroFormValues {
  email: string;
  password: string;
}
@Component({
  selector: 'app-otro-form',
  templateUrl: './otro-form.component.html',
  styleUrls: ['./otro-form.component.scss']
})
export class OtroFormComponent implements OnInit {
  @Output() formSubmitted = new EventEmitter<OtroFormValues>();
  faFilm = faFilm;

  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private service: NgxCommonUiLibService) {
    this.registerForm = this.fb.group({
      email: this.fb.control('', [Validators.email, Validators.required]),
      password: this.fb.control('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.service.print();
  }

  submit(){
    this.formSubmitted.emit(this.registerForm.value);
  }

}
