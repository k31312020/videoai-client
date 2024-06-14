import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private userService: UserService,
    private router: Router,
    private snackbar: MatSnackBar, private fb: NonNullableFormBuilder) { }

  loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  })

  login() {
    if (this.loginForm.valid) {
      const user = this.loginForm.value
      this.userService.login(user)
        .pipe(catchError((err) => {
          this.snackbar.open(err?.response?.error || 'Could not login!', "close", { duration: 3000 });
          return of({ response: { token: '' } })
        }))
        .subscribe(res => {
          sessionStorage.setItem("token", res.response.token)
          this.router.navigateByUrl("")
        })
    }
  }
}
