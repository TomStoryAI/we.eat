import { Dish } from "../model/dish";
import { ClusterEnum } from "../model/cluster";
export class Dishlist {
  dishentries: Set<Dish>;

  constructor() {
    this.dishentries = new Set<Dish>();
  }
  //Add Values
  getInitializedEntries(): Set<Dish> {
    this.dishentries.add(
      new Dish("Döner", new Set<ClusterEnum>([ClusterEnum.ITALIENISCH]))
    );
    return this.dishentries;
  }
}
