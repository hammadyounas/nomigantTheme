import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

//ROUTING
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

//containers
import { Containers, DashboardContainer } from "./container/index";

//Components
import { Components, Dashboard,Progressbar } from "./components/index";

//Styling
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { GridModule } from "@progress/kendo-angular-grid";

@NgModule({
  declarations: [
    AppComponent,
    Containers,
    DashboardContainer,
    Components,
    Dashboard,
    Progressbar
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
