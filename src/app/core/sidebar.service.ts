import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

type SidebarStatus = "closed" | "opened"

@Injectable({ providedIn : "root"})
export class SidebarService {
  constructor() {}
  private currentSidebarStatus = new BehaviorSubject<SidebarStatus>("closed")

  public setSidebarStatus(status: SidebarStatus) {
    this.currentSidebarStatus.next(status)
    console.log(this.currentSidebarStatus.value)
  }

  public returnStatus() {
    return this.currentSidebarStatus.asObservable()
  }
}