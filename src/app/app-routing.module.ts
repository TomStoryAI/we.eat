import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { QuestonnaireComponent } from "./questonnaire/questonnaire.component";
import { ResultComponent } from "./result/result.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: "questionnaire",
    component: QuestonnaireComponent
  },
  { path: "result", component: ResultComponent },
  { path: "", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
