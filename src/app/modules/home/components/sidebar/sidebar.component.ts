import { Component } from '@angular/core';
import { SidebarService } from 'src/app/core/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  constructor(private sidebarService: SidebarService) {}
  
  sidebarStatus = this.sidebarService.returnStatus()

  public closeSidebar() {
    this.sidebarService.setSidebarStatus("closed")
  }
}
