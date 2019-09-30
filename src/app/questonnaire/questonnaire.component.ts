import { Component, OnInit, Input, ViewChild, OnDestroy } from "@angular/core";
import { Dishlist } from "../model/dishlist";
import { Dish } from "../model/dish";
import { Router, NavigationEnd } from "@angular/router";
import { FormGroup, NgForm } from "@angular/forms";
import { MatCheckboxChange, MatCheckbox } from "@angular/material/checkbox";
import { MatIcon } from "@angular/material/icon";
import { MatSnackBar } from '@angular/material/snack-bar';

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
  counter = 1;

  constructor(private router: Router, private _snackBar: MatSnackBar) {
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
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    let matSnackBarRef = this._snackBar.open('Hungernde No.'+this.counter, 'Wähle Dein Essen', {
      duration: 3000,
      // here specify the position
      verticalPosition: 'top'
    });
    
    this.counter++;
  }
  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 768) ? 1 : 4;
    this.dishlist = new Dishlist().getInitializedEntries();
  }
}
