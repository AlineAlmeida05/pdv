import { Component } from '@angular/core';
import { LoginBanner } from "./features/login-banner/login-banner";
import { LoginForm } from "./features/login-form/login-form";

@Component({
  selector: 'app-login',
  imports: [LoginBanner, LoginForm],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {}
