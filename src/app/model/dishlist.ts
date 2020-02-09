import { Dish } from '../model/dish';
import { ClusterEnum } from '../model/cluster';
export class Dishlist {
  dishentries: Set<Dish>;

  constructor() {
    this.dishentries = new Set<Dish>();
  }
  getInitializedEntries(): Set<Dish> {
    this.dishentries.add(
      new Dish('Chicken Wings', new Set<ClusterEnum>([ClusterEnum.AMERIKANISCH, ClusterEnum.FASTFOOD, ClusterEnum.SNACKS]))
    );
    this.dishentries.add(
      new Dish('Curry', new Set<ClusterEnum>([ClusterEnum.INDISCH]))
    );
    this.dishentries.add(
      new Dish('Shawarma', new Set<ClusterEnum>([ClusterEnum.FASTFOOD]))
    );
    this.dishentries.add(
      new Dish('Duck', new Set<ClusterEnum>([ClusterEnum.CHINESISCH]))
    );
    this.dishentries.add(
      new Dish('Tarte', new Set<ClusterEnum>([ClusterEnum.FRANZOESISCH]))
    );
    this.dishentries.add(
      new Dish(
        'Griddle',
        new Set<ClusterEnum>([ClusterEnum.GRIECHISCH, ClusterEnum.STEAK])
      )
    );
    this.dishentries.add(
      new Dish('Burger', new Set<ClusterEnum>([ClusterEnum.AMERIKANISCH]))
    );
    this.dishentries.add(
      new Dish(
        'Pasta',
        new Set<ClusterEnum>([ClusterEnum.ITALIENISCH, ClusterEnum.CHINESISCH])
      )
    );
    this.dishentries.add(
      new Dish('Gyros', new Set<ClusterEnum>([ClusterEnum.GRIECHISCH]))
    );
    this.dishentries.add(
      new Dish(
        'French Fries',
        new Set<ClusterEnum>([ClusterEnum.AMERIKANISCH, ClusterEnum.FASTFOOD])
      )
    );
    this.dishentries.add(
      new Dish('Pizza', new Set<ClusterEnum>([ClusterEnum.ITALIENISCH, ClusterEnum.FASTFOOD]))
    );
    this.dishentries.add(
      new Dish(
        'Pizza Rolls',
        new Set<ClusterEnum>([ClusterEnum.ITALIENISCH, ClusterEnum.FASTFOOD, ClusterEnum.SNACKS])
      )
    );
    this.dishentries.add(
      new Dish(
        'Salad',
        new Set<ClusterEnum>([ClusterEnum.ITALIENISCH, ClusterEnum.VEGETARISCH])
      )
    );
    this.dishentries.add(
      new Dish('Steak', new Set<ClusterEnum>([ClusterEnum.STEAK]))
    );
    this.dishentries.add(
      new Dish('Sushi', new Set<ClusterEnum>([ClusterEnum.SUSHI]))
    );
    this.dishentries.add(
      new Dish(
        'Soup',
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
        'Wraps',
        new Set<ClusterEnum>([
          ClusterEnum.AMERIKANISCH,
          ClusterEnum.MEXIKANISCH
        ])
      )
    );

    return this.dishentries;
  }
}
