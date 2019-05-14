import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import { ValidateBrService } from 'angular-validate-br';

@Component({
  selector: 'app-form-plan',
  templateUrl: './form-plan.component.html',
  styleUrls: ['./form-plan.component.scss']
})
export class FormPlanComponent implements OnInit {
  form: FormGroup;
  success = false;

  constructor(
    private fb: FormBuilder,
    private validateBrService: ValidateBrService,
  ) { }

  ngOnInit() {
    this.createForm();
  }

  send() {
    if (!this.form.valid) {
      this.dirtyAllInputs();
    } else {
      this.success = true;
    }
  }
  private createForm() {
    this.form = this.fb.group({
      name: new FormControl(
        null,
        Validators.compose([
          Validators.required,
          Validators.maxLength(100),
          Validators.minLength(5)
        ])
      ),
      email: new FormControl(
        null,
        Validators.compose([
          Validators.required,
          Validators.email
        ])
      ),
      documentNumber: new FormControl(
        null,
        Validators.compose([
          Validators.required,
          this.validateBrService.cpf
        ])
      ),
      dateBirth: new FormControl(
        null,
        Validators.compose([
          Validators.required
        ])
      ),
      phoneNumber: new FormControl(
        null,
        Validators.compose([
          Validators.required,
          Validators.maxLength(11),
          Validators.minLength(10)
        ])
      ),
    });
  }

  private dirtyAllInputs() {
    Object.keys(this.form.value)
      .forEach(key => {
        if (!this.form.value[key]) {
          this.form.controls[key].markAsDirty();
          this.form.controls[key].markAsTouched();
          this.form.controls[key].setErrors({ required: true });
        }
      });
  }

  get name(): AbstractControl {
    return this.form.get('name');
  }

  get email(): AbstractControl {
    return this.form.get('email');
  }

  get documentNumber(): AbstractControl {
    return this.form.get('documentNumber');
  }

  get dateBirth(): AbstractControl {
    return this.form.get('dateBirth');
  }

  get phoneNumber(): AbstractControl {
    return this.form.get('phoneNumber');
  }

}
