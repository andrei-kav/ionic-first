import {Component, OnInit} from '@angular/core';
import {PickupCall, PickupCallStatus} from "../../components/pickup-call-card/pickup-call-card.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  lastCall: PickupCall = {
    status: PickupCallStatus.ON_HOLD,
    created: '12/12/2123',
    modified: '12/12/2323 13:03:12',
    notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Fusce volutpat sem vel felis facilisis, ut faucibus nisi laoreet.'
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showAll() {
    this.router.navigate(['pickup-calls'])
  }

  creatNewCall() {
    this.router.navigate(['pickup-call'])
  }

}
