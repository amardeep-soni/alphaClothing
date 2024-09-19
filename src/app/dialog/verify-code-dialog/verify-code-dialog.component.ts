import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-verify-code',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './verify-code-dialog.component.html',
  styleUrl: './verify-code-dialog.component.css'
})
export class VerifyCodeDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<VerifyCodeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }
  code!: number;

  onConfirm(): void {
    // verify code and close the dialog with sending authorization token
    let token = 'token';
    this.dialogRef.close(token);
  }
}
