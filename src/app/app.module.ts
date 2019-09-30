import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatGridListModule } from "@angular/material/grid-list";
import { AppRoutingModule } from "./app-routing.module";
import { MatTableModule } from "@angular/material/table";

import { AppComponent } from "./app.component";
import { QuestonnaireComponent } from "./questonnaire/questonnaire.component";
import { ResultComponent } from "./result/result.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { FormsModule } from "@angular/forms";
import { ButtonChoiceComponent } from "./button-choice/button-choice.component";
import { HomeComponent } from "./home/home.component";
import { AgmCoreModule } from "@agm/core";
@NgModule({
  declarations: [
    AppComponent,
    QuestonnaireComponent,
    ResultComponent,
    SidenavComponent,
    ButtonChoiceComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCheckboxModule,
    MatGridListModule,
    MatTableModule,
    AgmCoreModule.forRoot({
      apiKey: ""
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
