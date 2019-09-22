import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { Dishlist } from "../model/dishlist";
import { Dish } from "../model/dish";
import { Router, NavigationEnd } from "@angular/router";
import { FormGroup, NgForm } from "@angular/forms";

@Component({
  selector: "app-questonnaire",
  templateUrl: "./questonnaire.component.html",
  styleUrls: ["./questonnaire.component.scss"]
})
export class QuestonnaireComponent implements OnInit {
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
    this.dishForm.resetForm();
  }

  ngOnInit() {
    this.dishlist = new Dishlist().getInitializedEntries();
  }
}
