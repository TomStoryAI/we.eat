import { Injectable } from "@angular/core";
import { Dish } from "./model/dish";
import { Dishlist } from "./model/dishlist";
const DONE = "done";
const HIGHLIGHT_OFF = "highlight_off";
@Injectable({
  providedIn: "root"
})
export class FoodLogicService {
  dishlist: Set<Dish>;
  clusterCounter: Map<String, number>;
  clusterCalculation(dish: Dish, state: String) {
    for (let cluster of Array.from(dish.clusters)) {
      if (state == HIGHLIGHT_OFF) {
        this.clusterCounter.set(cluster, this.clusterCounter.get(cluster) + 1);
      } else if (state == DONE) {
        this.clusterCounter.set(cluster, this.clusterCounter.get(cluster) - 1);
      }
    }
  }

  constructor() {
    this.dishlist = new Dishlist().getInitializedEntries();
    this.initalizeClusterMap();
  }

  getCalculatedCluster(): Map<String, number> {
    return this.clusterCounter;
  }

  private initalizeClusterMap() {
    this.clusterCounter = new Map();
    for (let dish of Array.from(this.dishlist.values())) {
      for (let cluster of Array.from(dish.clusters)) {
        this.clusterCounter.set(cluster, 0);
      }
    }
  }
}
