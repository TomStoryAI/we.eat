import { Component, OnInit } from "@angular/core";
import { FoodLogicService } from "../food-logic.service";
const reducer = (accumulator, currentValue) => accumulator + currentValue;
@Component({
  selector: "app-result",
  templateUrl: "./result.component.html",
  styleUrls: ["./result.component.scss"]
})
export class ResultComponent implements OnInit {
  resultMap: Map<String, number>;
  resultArray: [String, number][];
  constructor(foodLogic: FoodLogicService) {
    this.resultMap = foodLogic.getCalculatedCluster();
    console.log(this.resultArray);
    this.resultArray = Array.from(this.resultMap).sort(this.sortFunction);
    console.log(this.resultArray);
  }

  sortFunction(a, b) {
    if (a[0] === b[0]) {
      return 0;
    } else {
      return a[0] < b[0] ? -1 : 1;
    }
  }

  ngOnInit() {}
}
