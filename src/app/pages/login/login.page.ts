import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {LoginPageForm} from "./login.page.form";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {
    this.form = new LoginPageForm(new FormBuilder()).createForm()
  }

  login() {
    this.router.navigate(['home'])
  }

  register() {
    this.router.navigate(['register'])
  }

}
