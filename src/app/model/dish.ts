import { ClusterEnum } from "../model/cluster";
export class Dish {
  name: string;
  clusters: Set<ClusterEnum>;

  constructor(name: string, clusters: Set<ClusterEnum>) {
    this.name = name;
    this.clusters = clusters;
  }
}
