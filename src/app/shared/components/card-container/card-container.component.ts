import { Component, AfterViewInit } from "@angular/core";
import Swiper from "swiper";
import { register } from "swiper/element/bundle"

@Component({
  selector : "app-card-container",
  templateUrl : "card-container.component.html"
})
export class CardContainerComponent implements AfterViewInit {
  swiper = new Swiper("swiper")

  swiperEl = document.querySelector('swiper-container');
  buttonEl = document.querySelector('button');

  ngAfterViewInit() {
    register()
  }
}