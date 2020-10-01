import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styles: [
  ]
})
export class ReactiveFormComponent implements OnInit {

  regUserForm: FormGroup;

  constructor() {
    /*
    this.regUserForm = formBuilder.group({
      firstName: [],
      lastName: [],
      emailID: []
    })
    */

    this.regUserForm = new FormBuilder().group({
      firstName: new FormControl('Mark'),
      lastName: new FormControl(),
      emailID: new FormControl(),
    })

    /*
    this.regUserForm = new FormGroup({
      firstName: new FormControl('John', Validators.required),
      lastName: new FormControl(),
      emailID: new FormControl(),
    });
    */
   
  }

  ngOnInit(): void {
  }

  UserRegistration(frmValues: FormGroup) {
    if (!frmValues.valid) {
      console.log('Form is Invalid');
      return;
    }
    console.log(frmValues)
    console.log('FirstName: ' + frmValues.controls.firstName.value);
    console.log('LastName: ' + frmValues.controls.lastName.value);
    console.log('EmailID: ' + frmValues.controls.emailID.value);

    frmValues.reset({
      'firstName':'Mark'
    });
  }

}
