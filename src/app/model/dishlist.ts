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
      new Dish("ChickenWings", new Set<ClusterEnum>([ClusterEnum.AMERIKANISCH]))
    );
    this.dishentries.add(
      new Dish("Curry", new Set<ClusterEnum>([ClusterEnum.INDISCH]))
    );
    this.dishentries.add(
      new Dish("Döner", new Set<ClusterEnum>([ClusterEnum.IMBISS]))
    );
    this.dishentries.add(
      new Dish("Ente", new Set<ClusterEnum>([ClusterEnum.CHINESISCH]))
    );
    this.dishentries.add(
      new Dish("Flammkuchen", new Set<ClusterEnum>([ClusterEnum.FRANZOESISCH]))
    );
    this.dishentries.add(
      new Dish(
        "Grillplatte",
        new Set<ClusterEnum>([ClusterEnum.GRIECHISCH, ClusterEnum.STEAK])
      )
    );
    this.dishentries.add(
      new Dish("Hamburger", new Set<ClusterEnum>([ClusterEnum.AMERIKANISCH]))
    );
    this.dishentries.add(
      new Dish(
        "Nudeln",
        new Set<ClusterEnum>([ClusterEnum.ITALIENISCH, ClusterEnum.CHINESISCH])
      )
    );
    this.dishentries.add(
      new Dish("Gyros", new Set<ClusterEnum>([ClusterEnum.GRIECHISCH]))
    );
    this.dishentries.add(
      new Dish(
        "Pommes",
        new Set<ClusterEnum>([ClusterEnum.AMERIKANISCH, ClusterEnum.IMBISS])
      )
    );
    this.dishentries.add(
      new Dish("Pizza", new Set<ClusterEnum>([ClusterEnum.ITALIENISCH]))
    );
    this.dishentries.add(
      new Dish(
        "Pizzabroetchen",
        new Set<ClusterEnum>([ClusterEnum.ITALIENISCH, ClusterEnum.IMBISS])
      )
    );
    this.dishentries.add(
      new Dish(
        "Salat",
        new Set<ClusterEnum>([ClusterEnum.ITALIENISCH, ClusterEnum.VEGETARISCH])
      )
    );
    this.dishentries.add(
      new Dish("Steak", new Set<ClusterEnum>([ClusterEnum.STEAK]))
    );
    this.dishentries.add(
      new Dish("Sushi", new Set<ClusterEnum>([ClusterEnum.SUSHI]))
    );
    this.dishentries.add(
      new Dish(
        "Suppe",
        new Set<ClusterEnum>([
          ClusterEnum.SUSHI,
          ClusterEnum.VEGETARISCH,
          ClusterEnum.DEUTSCH,
          ClusterEnum.INDISCH
        ])
      )
    );
    this.dishentries.add(
      new Dish(
        "Wraps",
        new Set<ClusterEnum>([
          ClusterEnum.AMERIKANISCH,
          ClusterEnum.MEXIKANISCH
        ])
      )
    );

    return this.dishentries;
  }
}
