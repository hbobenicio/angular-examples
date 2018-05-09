import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') appForm: NgForm;

  defaultQuestion: string = 'pet';
  answer: string = '';
  genders: string[] = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted: boolean = false;

  suggestUserName() {
    const suggestedName = 'Superuser';

    // NgForm.setValue({...}) can be used to set all values of the form
    // Not the best approach, because you can lose already entered data
    //
    // this.appForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // })
    //
    // NgForm.form.patchValue will merge existing model with the specific
    // value you need to update only
    this.appForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // onSubmit(appForm: NgForm) {
  //   console.log('Submitted the form:', appForm, "with values:", appForm.value);
  // }

  onSubmit() {
    this.user.username = this.appForm.value.userData.username;
    this.user.email = this.appForm.value.userData.email;
    this.user.secretQuestion = this.appForm.value.secret;
    this.user.answer = this.appForm.value.questionAnswer;
    this.user.gender = this.appForm.value.gender;

    this.submitted = true;
    this.appForm.reset();
    console.log('Submitted the form:', this.appForm, "with values:", this.appForm.value);
  }
}
