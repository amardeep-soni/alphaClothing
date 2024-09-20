import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, CommonModule, RouterModule, MatCardModule, MatButtonModule, MatIconModule, FormsModule, MatProgressSpinnerModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(public router: Router) { }

  hidePassword: boolean = true;
  email: string = '';
  password: string = '';
  code: string = '';
  isOtpForm: boolean = false;
  isLoading: boolean = false;
  otpReceived: string = '';
  emailDisabled: boolean = false;

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  otpFormToggle() {
    this.isOtpForm = !this.isOtpForm;
    this.email = '';
    this.password = '';
    this.code = '';
    this.hidePassword = true;
    this.otpReceived = '';
    this.emailDisabled = false;
  }

  sendMail() {
    // TODO: Send verification mail to user's registered email address
    this.isLoading = true;
    this.emailDisabled = true;
    setTimeout(() => {
      console.log('Verification email sent successfully');
      // in otp received setting email so that if user changes email by edinging html by inscept then nothing happens
      this.otpReceived = this.email;
      this.isLoading = false;
    }, 2000);
  }

  login() {
    // TODO: Implement form submission logic here
    console.log('Form submitted');
    if (this.isOtpForm) {
      // TODO: Validate OTP and proceed with login
      console.log(this.otpReceived, this.code);

      console.log('OTP validated successfully');
    } else {
      // TODO: Validate login credentials and proceed with login
      console.log(this.email, this.password);
      console.log('Login successful');
    }
    // Redirect to dashboard page
    // this.router.navigate(['/dashboard']);
  }
}
