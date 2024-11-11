import {Component, Input, OnInit} from '@angular/core';

interface CallBase {
  created: string,
  modified: string,
  notes: string
}

interface OnHoldCall extends CallBase {
  status: PickupCallStatus.ON_HOLD
}

interface ProcessingCall extends CallBase {
  status: PickupCallStatus.PROCESSING
}

interface FinishedCall extends CallBase {
  status: PickupCallStatus.FINISHED,
  reward: number
}

export enum PickupCallStatus {
  ON_HOLD = 'On hold',
  PROCESSING = 'Processing',
  FINISHED = 'Finished'
}

export type PickupCall = OnHoldCall | ProcessingCall | FinishedCall

@Component({
  selector: 'app-pickup-call-card',
  templateUrl: './pickup-call-card.component.html',
  styleUrls: ['./pickup-call-card.component.scss'],
})
export class PickupCallCardComponent  implements OnInit {

  @Input() call: PickupCall;

  private readonly onHold = {
    icon: 'hourglass-outline', iconColor: 'warning'
  }

  private readonly processing = {
    icon: 'archive-outline', iconColor: 'secondary'
  }

  private readonly finished = {
    icon: 'checkmark-circle-outline', iconColor: 'primary'
  }


  constructor() { }

  ngOnInit() {}

  getIcon(call: PickupCall): string {
    switch (call.status) {
      case PickupCallStatus.ON_HOLD: return this.onHold.icon
      case PickupCallStatus.PROCESSING: return this.processing.icon
      case PickupCallStatus.FINISHED: return this.finished.icon
    }
  }

  getIconColor(call: PickupCall): string {
    switch (call.status) {
      case PickupCallStatus.ON_HOLD: return this.onHold.iconColor
      case PickupCallStatus.PROCESSING: return this.processing.iconColor
      case PickupCallStatus.FINISHED: return this.finished.iconColor
    }
  }

  isFinished(call: PickupCall): call is FinishedCall {
    return call.status === PickupCallStatus.FINISHED
  }

}
