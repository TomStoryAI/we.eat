class Dish {
  name: string;
  clusters: Set<Cluster>;

  constructor(name: string, clusters: Set<Cluster>) {
    this.name = name;
    this.clusters = clusters;
  }
}
