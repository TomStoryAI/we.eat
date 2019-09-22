import { Component, OnInit } from "@angular/core";
import { Dishlist } from "../model/dishlist";
import { Dish } from "../model/dish";

@Component({
  selector: "app-questonnaire",
  templateUrl: "./questonnaire.component.html",
  styleUrls: ["./questonnaire.component.scss"]
})
export class QuestonnaireComponent implements OnInit {
  dishlist: Set<Dish>;
  constructor() {}

  ngOnInit() {
    this.dishlist = new Dishlist().getInitializedEntries();
  }
}
