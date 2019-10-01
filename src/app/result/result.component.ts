import { Component, OnInit } from "@angular/core";
import { FoodLogicService } from "../food-logic.service";
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { environment } from '../../environments/environment';
const reducer = (accumulator, currentValue) => accumulator + currentValue;
@Component({
  selector: "app-result",
  templateUrl: "./result.component.html",
  styleUrls: ["./result.component.scss"]
})
export class ResultComponent implements OnInit {
  mapsLinkBase = "https://www.google.com/maps/embed/v1/place?key="+environment.MapsKey+"&q=";
  mapsLink : string;
  urlSafe: SafeResourceUrl;

  lat = 51.678418;
  lng = 7.809007;
  resultMap: Map<String, number>;
  resultArray: [String, number][];
  constructor(foodLogic: FoodLogicService, public sanitizer: DomSanitizer) {
    this.resultMap = foodLogic.getCalculatedCluster();
    this.resultArray = Array.from(this.resultMap).sort(this.sortFunction);
    console.log(this.mapsLink)
    this.mapsLink = this.mapsLinkBase + this.resultArray[0][0];
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.mapsLink);
  }

  sortFunction(a, b) {
    
    console.log(b)
    if (a[1] === b[1]) {
      return 0;
    } else {
      return a[1] > b[1] ? -1 : 1;
    }
  }

  updateMap(category : string) {
    this.mapsLink = this.mapsLinkBase + category
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.mapsLink);
  }

  ngOnInit() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
}
