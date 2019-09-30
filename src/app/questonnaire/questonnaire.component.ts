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
  breakpoint = 4;
  dishlist: Set<Dish>;
  navigationSubscription;
  @ViewChild("dishForm", { static: true }) dishForm: NgForm;

  constructor(private router: Router) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseQuestionnaire();
      }
    });
  }

  initialiseQuestionnaire() {
    console.log("RESETTING");
    this.dishlist = new Dishlist().getInitializedEntries();
  }
  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 4;
    this.dishlist = new Dishlist().getInitializedEntries();
  }
}
