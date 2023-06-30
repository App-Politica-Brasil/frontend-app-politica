import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CardContainerComponent } from "./card-container.component";

@NgModule({
  declarations : [CardContainerComponent],
  imports : [],
  exports : [CardContainerComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class CardContainerModule {}