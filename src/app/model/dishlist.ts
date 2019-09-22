class Dishlist {
  static dishentries: Set<Dish>;

  //Add Values
  static getInitializedEntries() {
    this.dishentries.add(
      new Dish("Döner", new Set<Cluster>([Cluster.ITALIENISCH]))
    );
  }
}
