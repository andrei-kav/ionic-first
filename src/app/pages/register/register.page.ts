import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  actions = [
    {title: 'I want to BUY it', value: 'CLIENT'},
    {title: 'I want to SELL it', value: 'PARTNER'},
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.router.navigate(['login'])
  }

}
