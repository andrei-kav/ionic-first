import {NgModule} from "@angular/core";
import {PickupCallCardComponent} from "./pickup-call-card/pickup-call-card.component";
import {IonicModule} from "@ionic/angular";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [
    PickupCallCardComponent
  ],
  exports: [
    PickupCallCardComponent
  ]
})
export class ComponentsModule {}
