import { Component, OnInit, Input, ViewChild, OnDestroy } from "@angular/core";
import { Dishlist } from "../model/dishlist";
import { Dish } from "../model/dish";
import { Router, NavigationEnd } from "@angular/router";
import { FormGroup, NgForm } from "@angular/forms";
import { MatCheckboxChange, MatCheckbox } from "@angular/material/checkbox";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: "app-questonnaire",
  templateUrl: "./questonnaire.component.html",
  styleUrls: ["./questonnaire.component.scss"]
})
export class QuestonnaireComponent implements OnInit, OnDestroy {
  dishlist: Set<Dish>;
  navigationSubscription;
  @ViewChild("dishForm", { static: true }) dishForm: NgForm;

  constructor(private router: Router) {}

  initialiseQuestionnaire() {
    console.log("RESETTING");
    this.dishForm.reset();
  }
  ngOnDestroy() {}
  ngOnInit() {
    this.dishlist = new Dishlist().getInitializedEntries();
  }
}
