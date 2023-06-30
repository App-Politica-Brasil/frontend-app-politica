import { Component, Input } from "@angular/core";

@Component({
  selector : "app-deputy-card",
  templateUrl : "./deputy-card.component.html"
})
export class DeputyCardComponent {
  @Input() public deputyName = ""
  @Input() public deputyParty = ""
  @Input() public deputyBirthplace = ""
}