import { Component, OnInit } from "@angular/core";
import { FoodLogicService } from "../food-logic.service";

@Component({
  selector: "app-result",
  templateUrl: "./result.component.html",
  styleUrls: ["./result.component.scss"]
})
export class ResultComponent implements OnInit {
  resultMap: Map<String, number>;
  constructor(foodLogic: FoodLogicService) {
    this.resultMap = foodLogic.getCalculatedCluster();
  }

  ngOnInit() {}
}
