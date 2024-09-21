import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { User } from '../../interfaces';
import { MatDialog } from '@angular/material/dialog';
import { VerifyCodeDialogComponent } from '../../dialog/verify-code-dialog/verify-code-dialog.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, MatIconModule, CommonModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  registerForm: FormGroup;
  hidePassword = true;

  constructor(private fb: FormBuilder, private dialog: MatDialog) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      password: ['', [Validators.required, Validators.minLength(8), this.passwordValidator]]
    });
  }

  ngOnInit(): void { }

  get name() {
    return this.registerForm.get('name')!;
  }

  get email() {
    return this.registerForm.get('email')!;
  }

  get phone() {
    return this.registerForm.get('phone')!;
  }

  get password() {
    return this.registerForm.get('password')!;
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;

      let user: User = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password
      }
      //  save this user to db
      console.log(user);

      // open dialog to verify generated code
      this.openDialog(user.email);

    } else {
      this.registerForm.markAllAsTouched();
    }
  }

  passwordValidator(control: { value: string }) {
    const password = control.value;
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isValid = hasNumber && hasSpecialChar;

    return password.length >= 8 && isValid ? null : { passwordStrength: true };
  }

  openDialog(email: string) {
    var cardWidth = document.querySelector('.card')?.clientWidth.toString();
    let dialogRef = this.dialog.open(VerifyCodeDialogComponent, {
      width: cardWidth + 'px',
      data: email
    })
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        // res is true means user is authenticated here save the user token to cokies and redirect to profile page
        console.log(res);
        
      }
    });
  }
}
