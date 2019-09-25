import { Component, OnInit, ViewChild, Input, ElementRef } from "@angular/core";
import { Dish } from "../model/dish";
import { FoodLogicService } from "../food-logic.service";

const DONE = "done";
const HIGHLIGHT_OFF = "highlight_off";
let iconClickMap = new Map();
iconClickMap.set(DONE, HIGHLIGHT_OFF);
iconClickMap.set(HIGHLIGHT_OFF, DONE);

@Component({
  selector: "button-choice",
  templateUrl: "./button-choice.component.html",
  styleUrls: ["./button-choice.component.scss"]
})
export class ButtonChoiceComponent {
  @Input() dish: Dish;
  buttonIconString: string;
  foodLogic: FoodLogicService;
  constructor(foodLogic: FoodLogicService) {
    this.buttonIconString = HIGHLIGHT_OFF;
    this.foodLogic = foodLogic;
  }

  runButtonClickEvent() {
    this.foodLogic.clusterCalculation(this.dish, this.buttonIconString);
    this.buttonIconString = iconClickMap.get(this.buttonIconString);
  }
}
