class Dishlist {
  static dishentries: Set<Dish>;

  //Add Values
  static getInitializedEntries() {
    this.dishentries.add(
      new Dish("ChickenWings", new Set<Cluster>([Cluster.AMERIKANISCH]))
    );
    this.dishentries.add(
      new Dish("Curry", new Set<Cluster>([Cluster.INDISCH]))
    );
    this.dishentries.add(
      new Dish("Döner", new Set<Cluster>([Cluster.IMBISS,]))
    );
    this.dishentries.add(
      new Dish("Ente", new Set<Cluster>([Cluster.CHINESISCH]))
    );
    this.dishentries.add(
      new Dish("Flammkuchen", new Set<Cluster>([Cluster.FRANZOESISCH]))
    );
    this.dishentries.add(
      new Dish("Grillplatte", new Set<Cluster>([Cluster.GRIECHISCH, Cluster.STEAK]))
    );
    this.dishentries.add(
      new Dish("Hamburger", new Set<Cluster>([Cluster.AMERIKANISCH]))
    );
    this.dishentries.add(
      new Dish("Nudeln", new Set<Cluster>([Cluster.ITALIENISCH, Cluster.CHINESISCH]))
      );
    this.dishentries.add(
      new Dish("Gyros", new Set<Cluster>([Cluster.GRIECHISCH]))
      );
    this.dishentries.add(
      new Dish("Pommes", new Set<Cluster>([Cluster.AMERIKANISCH, Cluster.IMBISS]))
      );
    this.dishentries.add(
      new Dish("Pizza", new Set<Cluster>([Cluster.ITALIENISCH]))
    );
    this.dishentries.add(
      new Dish("Pizzabroetchen", new Set<Cluster>([Cluster.ITALIENISCH, Cluster.IMBISS]))
    );
    this.dishentries.add(
      new Dish("Salat", new Set<Cluster>([Cluster.ITALIENISCH, Cluster.VEGETARISCH]))
    );
    this.dishentries.add(
      new Dish("Steak", new Set<Cluster>([Cluster.STEAK]))
    );    
    this.dishentries.add(
      new Dish("Sushi", new Set<Cluster>([Cluster.SUSHI]))
    );
    this.dishentries.add(
      new Dish("Suppe", new Set<Cluster>([Cluster.SUSHI, Cluster.VEGETARISCH, Cluster.DEUTSCH, Cluster.INDISCH]))
    );
    this.dishentries.add(
      new Dish("Wraps", new Set<Cluster>([Cluster.AMERIKANISCH, Cluster.MEXIKANISCH]))
    );



  }
}
