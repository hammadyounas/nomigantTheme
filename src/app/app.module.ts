import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


//ROUTING
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

//containers
import { Containers, DashboardContainer } from "./container/index";

//Components
import { Components, Dashboard } from "./components/index";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    Containers,
    DashboardContainer,
    Components,
    Dashboard
  ],
  imports: [BrowserModule, 
    AppRoutingModule, 
    BrowserAnimationsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
