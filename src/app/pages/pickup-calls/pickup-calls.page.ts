import {Component, OnInit} from '@angular/core';
import {
  PickupCall,
  PickupCallStatus,
} from "../../components/pickup-call-card/pickup-call-card.component";


@Component({
  selector: 'app-pickup-calls',
  templateUrl: './pickup-calls.page.html',
  styleUrls: ['./pickup-calls.page.scss'],
})
export class PickupCallsPage implements OnInit {

  calls: PickupCall[] = [
    {
      status: PickupCallStatus.ON_HOLD,
      created: '12/12/2123',
      modified: '12/12/2323 13:03:12',
      notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Fusce volutpat sem vel felis facilisis, ut faucibus nisi laoreet.'
    },
    {
      status: PickupCallStatus.PROCESSING,
      created: '12/12/2123',
      modified: '12/12/2323 13:03:12',
      notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Fusce volutpat sem vel felis facilisis, ut faucibus nisi laoreet.'
    },
    {
      status: PickupCallStatus.FINISHED,
      created: '12/12/2123',
      modified: '12/12/2323 13:03:12',
      reward: 17.13,
      notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Fusce volutpat sem vel felis facilisis, ut faucibus nisi laoreet.'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
