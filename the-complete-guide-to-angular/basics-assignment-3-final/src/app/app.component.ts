import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showPassword: boolean = false;
  clickLog = [];
  index = 1;

  onClickButton() {
    const click = {
      index: this.index++,
      timestamp: new Date()
    };

    this.clickLog.push(click);
    this.toogleShowPassword();
  }

  toogleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
