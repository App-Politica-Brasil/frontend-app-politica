import { Component } from "@angular/core";
import { SidebarService } from "src/app/core/sidebar.service";

@Component({
  selector : "app-header",
  templateUrl : "header.component.html"
})
export class HeaderComponent {
  constructor(private sidebarService: SidebarService) {}

  public handleSidebar() {
    this.sidebarService.setSidebarStatus("opened")
  }
}