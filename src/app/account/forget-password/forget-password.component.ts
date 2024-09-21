import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, CommonModule, RouterModule, MatCardModule, MatButtonModule, MatIconModule, FormsModule, MatProgressSpinnerModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent {
  email: string = '';
  code: string = '';
  newPassword: string | null = null;
  emailDisabled: boolean = false;
  otpReceived: string = '';
  isLoading: boolean = false;
  codeVerify: boolean = false;

  constructor(private router: Router) { }

  sendMail() {
    // TODO: Send verification mail to user's registered email address
    this.isLoading = true;
    this.emailDisabled = true;
    this.otpReceived = '';
    this.code = '';
    setTimeout(() => {
      console.log('Verification email sent successfully');
      // in otp received setting email so that if user changes email by edinging html by inscept then nothing happens
      this.otpReceived = this.email;
      this.isLoading = false;
    }, 2000);
  }
  verifyCode() {
    // TODO: verify code with api call
    this.isLoading = true;
    this.codeVerify = true;
    setTimeout(() => {
      console.log('Code verified successfully');
      this.isLoading = false;
      this.newPassword = '';
    }, 2000);
  }

  changePassword() {
    // TODO: Change password with api call
    console.log(this.otpReceived, this.newPassword);
    this.router.navigate(['/login']);
  }
}
