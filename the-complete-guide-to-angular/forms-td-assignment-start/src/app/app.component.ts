import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface SubscriptionOption {
  label: string,
  value: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('awesomeForm')
  awesomeForm: NgForm;

  subscriptionOptions: SubscriptionOption[] = [
    {label: 'Basic', value: 'basic'},
    {label: 'Advanced', value: 'advanced'},
    {label: 'Pro', value: 'pro'}
  ];

  submitted: boolean = false;

  get defaultSubscription(): SubscriptionOption {
    return this.subscriptionOptions.find(option => option.value === 'advanced');
  }

  onSubmit() {
    console.log('Submetendo o formulário', this.awesomeForm, 'com os valores', this.awesomeForm.value);
    this.submitted = true;
  }
}
